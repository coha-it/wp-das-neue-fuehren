<?php

namespace Vendidero\StoreaBill\WooCommerce;

use Vendidero\StoreaBill\Invoice\Cancellation;
use Vendidero\StoreaBill\Invoice\TaxableItem;
use Vendidero\StoreaBill\Invoice\Invoice;
use Vendidero\StoreaBill\Invoice\Simple;
use Vendidero\StoreaBill\Package;
use Vendidero\StoreaBill\WooCommerce\Admin\Admin;
use Vendidero\StoreaBill\WooCommerce\REST\Server;

defined( 'ABSPATH' ) || exit;

class Helper {

	public static function init() {
		if ( is_admin() ) {
			Admin::init();
		}

		if ( ! Package::enable_accounting() ) {
			return;
		}

		/**
		 * Enable syncing between Germanized split tax calculation for orders and invoices.
		 */
		add_filter( 'storeabill_round_tax_at_subtotal_split_tax_calculation', array( __CLASS__, 'set_split_tax_rounding' ), 10, 2 );
		add_filter( 'storeabill_invoice_calculate_tax_shares_net_based', array( __CLASS__, 'set_split_tax_share_net_based' ), 10, 2 );

		/**
		 * In case the order gets marked as payment complete - set corresponding invoice payment status.
		 */
		add_action( 'woocommerce_payment_complete', array( __CLASS__, 'sync_order_payment' ), 10 );

		/**
		 * Make sure to sync the invoice payment status with the order payment status before closing invoice.
		 */
		add_action( 'storeabill_invoice_status_closed', array( __CLASS__, 'sync_invoice_payment' ), 10, 2 );

		/**
		 * In case a refund is created - make sure our invoices/cancellations are adjusted accordingly.
		 */
		add_action( 'woocommerce_order_refunded', array( __CLASS__, 'sync_order_refund' ), 10, 2 );

		/**
		 * Validate the order upon saving.
		 */
		add_action( 'woocommerce_after_order_object_save', array( __CLASS__, 'validate_order' ), 10 );

		/**
		 * Register order status update hooks on init.
		 */
		add_action( 'init', array( __CLASS__, 'register_order_status_hooks' ), 50 );

		/**
		 * Customer panel downloads
		 */
		add_filter( 'woocommerce_my_account_my_orders_actions', array( __CLASS__, 'customer_panel_actions' ), 10, 2 );
		add_action( 'woocommerce_view_order', array( __CLASS__, 'customer_panel_download_button' ), 15, 1 );

		/**
		 * Customer sync
		 */
		add_action( 'storeabill_setup_customer_sync_filters', array( __CLASS__, 'register_customer_sync' ), 10, 4 );

		// Invoice Search
		add_action( 'parse_query', array( __CLASS__, 'search_order_invoices' ), 15 );

		/**
		 * Add latest invoices to default Woo invoice mail if existent.
		 */
		add_filter( 'woocommerce_email_attachments', array( __CLASS__, 'attach_invoice_to_mail' ), 10, 4 );

		add_filter( 'user_has_cap', array( __CLASS__, 'customer_has_capability' ), 10, 3 );

		add_filter( 'woocommerce_rest_is_request_to_rest_api', array( __CLASS__, 'is_woo_rest_request' ), 10 );

		/**
		 * Add invoice data to order preview
		 */
		add_filter( 'woocommerce_admin_order_preview_get_order_details', array( __CLASS__, 'add_order_preview_data' ), 10, 2 );
		add_action( 'woocommerce_admin_order_preview_start', array( __CLASS__, 'render_order_preview' ), 10 );

		Automation::init();
		Server::init();
	}

	public static function render_order_preview() {
		?>
		<# if ( data.invoice_status_html && data.latest_invoice_number ) { #>
			<div class="sab-order-preview-invoices">
				<div class="sab-order-preview-invoice-wrapper">
					<strong><?php echo esc_html_x( 'Invoicing Status', 'storeabill-core', 'woocommerce-germanized-pro' ); ?></strong>
					{{{ data.invoice_status_html }}}
				</div>

				<# if ( data.latest_invoice_number ) { #>
				<div class="sab-order-preview-invoice-wrapper">
					<strong><?php echo esc_html_x( 'Latest invoice', 'storeabill-core', 'woocommerce-germanized-pro' ); ?></strong>
					<a href="{{{ data.latest_invoice_download_url }}}" target="_blank">{{ data.latest_invoice_number }}</a>
				</div>
				<# } #>

				<div style="clear: both"></div>
			</div>
		<# } #>
		<?php
	}

	/**
	 * @param $data
	 * @param \WC_Order $order
	 */
	public static function add_order_preview_data( $data, $order ) {
		if ( $sab_order = self::get_order( $order ) ) {
			ob_start();
			include Package::get_path() . '/includes/admin/views/html-order-payment-status.php';
			$status_html = ob_get_clean();

			if ( ! empty( $status_html ) ) {
				$data['invoice_status_html'] = $status_html;
			}

			if ( $latest = $sab_order->get_latest_finalized_invoice() ) {
				if ( current_user_can( 'read_invoice', $latest->get_id() ) ) {
					$data['latest_invoice_number']       = $latest->get_title( false );
					$data['latest_invoice_download_url'] = $latest->get_download_url();
				}
			}
		}

		return $data;
	}

	public static function is_woo_rest_request( $is_request ) {
		$rest_prefix = trailingslashit( rest_get_url_prefix() );
		$request_uri = esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) );

		// Check if the request is to the WC API endpoints.
		$storeabill = ( false !== strpos( $request_uri, $rest_prefix . 'sab/' ) );

		if ( ! $is_request && $storeabill ) {
			return true;
		}

		return $is_request;
	}

	/**
	 * Checks if a user has a certain capability.
	 *
	 * @param array $allcaps All capabilities.
	 * @param array $caps    Capabilities.
	 * @param array $args    Arguments.
	 *
	 * @return array The filtered array of all capabilities.
	 */
	public static function customer_has_capability( $allcaps, $caps, $args ) {
		if ( isset( $caps[0] ) ) {
			foreach( sab_get_document_types() as $document_type ) {
				if ( 'view_' . $document_type === $caps[0] && self::document_type_supports_customer_download( $document_type ) ) {
					$user_id     = intval( $args[1] );
					$document    = sab_get_document( $args[2], $document_type );
					$customer_id = $document->get_customer_id();

					if ( $document && ! $document->is_editable() && ( ! empty( $user_id ) && ! empty( $customer_id ) && $user_id === $customer_id ) ) {
						$allcaps["view_{$document_type}"] = true;
					}

					break;
				}
			}
		}
		return $allcaps;
	}

	/**
	 * In case a finalized invoice exists, attach the (latest) invoice file
	 * to the default Woo customer invoice mail.
	 *
	 * @param $attachments
	 * @param $email_id
	 * @param $object
	 * @param $email
	 *
	 * @return mixed
	 */
	public static function attach_invoice_to_mail( $attachments, $email_id, $object, $email ) {
		if ( 'customer_invoice' === $email_id ) {
			if ( is_a( $object, 'WC_Order' ) ) {
				if ( $order = self::get_order( $object ) ) {
					$invoices = $order->get_finalized_invoices();

					if ( ! empty( $invoices ) ) {
						$last_invoice = array_values( array_slice( $invoices, -1 ) )[0];

						if ( $last_invoice->has_file() ) {
							$attachments[] = $last_invoice->get_path();
						}
					}
				}
			}
		}

		return $attachments;
	}

	public static function search_order_invoices( $wp ) {
		global $pagenow;

		if ( 'edit.php' !== $pagenow || 'shop_order' !== $wp->query_vars['post_type'] || ! isset( $_GET['s'] ) ) { // phpcs:ignore  WordPress.Security.NonceVerification.Recommended
			return;
		}

		if ( isset( $_GET['s'] ) && ! isset( $wp->query_vars['s'] ) ) {
			$wp->query_vars['s'] = wc_clean( $_GET['s'] );
		}

		if ( empty( $wp->query_vars['s'] ) ) {
			return;
		}

		$invoices = sab_get_invoices( array(
			'reference_type' => 'woocommerce',
			'limit'          => 5,
			'orderby'        => 'date_created',
			'order'          => 'ASC',
			'type'           => array( 'invoice', 'invoice_cancellation' ),
			'search'         => '*' . $wp->query_vars['s'] . '*',
			'search_columns' => array( 'document_formatted_number', 'document_number' )
		) );

		$post_ids = array();

		foreach( $invoices as $invoice ) {
			$post_ids[] = $invoice->get_reference_id();
		}

		$post_ids = array_unique( $post_ids );

		if ( ! empty( $post_ids ) ) {
			// Remove "s" - we don't want to search order name.
			unset( $wp->query_vars['s'] );

			if ( ! isset( $wp->query_vars['post__in'] ) ) {
				$wp->query_vars['post__in'] = array();
			} elseif ( ! is_array( $wp->query_vars['post__in'] ) ) {
				$wp->query_vars['post__in'] = array( $wp->query_vars['post__in'] );
			}

			$wp->query_vars['post__in'] = array_unique( array_merge( $post_ids, $wp->query_vars['post__in'] ) );
		} elseif ( isset( $wp->query_vars['shop_order_search'] ) ) {
			// Unset so that Woo order search works
			unset( $wp->query_vars['s'] );
		}
	}

	public static function register_customer_sync( $handler, $handler_name, $sync_callback, $sync_user_callback ) {
		$check_customer_saving_callback = function( $object, $data_store ) use ( $sync_user_callback ) {
			if ( is_a( $object, 'WC_Customer' ) ) {
				$changes = $object->get_changes();

				if ( ! empty( $changes ) ) {
					add_action( 'woocommerce_update_customer', $sync_user_callback, 10 );
					add_action( 'woocommerce_create_customer', $sync_user_callback, 10 );
				}
			}
		};

		add_action( 'woocommerce_before_data_object_save', $check_customer_saving_callback, 10, 2 );
	}

	protected static function document_type_supports_customer_download( $document_type ) {
		return 'yes' === Package::get_setting( "invoice_woo_order_{$document_type}_customer_download" );
	}

	public static function customer_panel_download_button( $order_id ) {
		if ( $sab_order = self::get_order( $order_id ) ) {
			$documents = array();

			foreach ( $sab_order->get_finalized_documents() as $document ) {
				if ( self::document_type_supports_customer_download( $document->get_type() ) && current_user_can( "view_{$document->get_type()}", $document->get_id() ) ) {
					$documents[] = $document;
				}
			}

			if ( ! empty( $documents ) ) {
				sab_get_template( 'myaccount/download.php', array( 'documents' => $documents, 'document_title' => sab_get_document_type_label( 'invoice', 'plural' ) ) );
			}
		}
	}

	/**
	 * @param $actions
	 * @param \WC_Order $order
	 */
	public static function customer_panel_actions( $actions, $order ) {
		if ( $sab_order = self::get_order( $order ) ) {
			foreach( $sab_order->get_finalized_documents() as $document ) {
				if ( self::document_type_supports_customer_download( $document->get_type() ) && current_user_can( "view_{$document->get_type()}", $document->get_id() ) ) {
					$actions["sab_document_{$document->get_id()}"] = array(
						'url'  => $document->get_download_url( apply_filters( 'storeabill_woo_customer_force_document_download', false ) ),
						'name' => apply_filters( 'storeabill_woo_customer_document_name', $document->get_title(), $document ),
					);
				}
			}
		}

		return $actions;
	}

	/**
	 * Older version of Germanized did calculate tax shares based on gross prices instead of net prices.
	 * In case the order does not contain _has_split_tax meta field - use gross prices.
	 *
	 * @param boolean $net_based
	 * @param TaxableItem $item
	 */
	public static function set_split_tax_share_net_based( $net_based, $item ) {
		if ( $document = $item->get_document() ) {
			if ( is_a( $document, 'Vendidero\StoreaBill\Invoice\Invoice' ) ) {
				if ( 'woocommerce' === $document->get_reference_type() ) {
					if ( $order = $document->get_order() ) {
						if ( 'yes' !== $order->get_meta( '_has_split_tax' ) ) {
							return false;
						} else {
							return true;
						}
					}
				}
			}
		}

		return $net_based;
	}

	public static function register_order_status_hooks() {
		foreach( wc_get_is_paid_statuses() as $status ) {
			add_action( "woocommerce_order_status_{$status}", array( __CLASS__, 'sync_order_payment' ), 20 );
		}
	}

	public static function validate_order( $order ) {
		if ( $sab_order = self::get_order( $order ) ) {
			$sab_order->validate();
		}
	}

	/**
	 * @param $order_id
	 * @param $refund_id
	 */
	public static function sync_order_refund( $order_id, $refund_id ) {
		if ( $sab_order = self::get_order( $order_id ) ) {
			$sab_order->validate();
		}
	}

	/**
	 * @param integer $invoice_id
	 * @param Invoice $invoice
	 */
	public static function sync_invoice_payment( $invoice_id, $invoice ) {
		if ( $sab_order = $invoice->get_order() ) {
			if ( $sab_order->is_paid() ) {
				$invoice->set_payment_status( 'complete' );
				$invoice->save();
			}
		}
	}

	public static function sync_order_payment( $order_id ) {
		if ( $sab_order = self::get_order( $order_id ) ) {
			$synced = false;

			if ( $sab_order->is_paid() ) {
				foreach( $sab_order->get_invoices() as $invoice ) {
					if ( ! $invoice->is_paid() ) {
						$invoice->set_payment_status( 'complete' );
						$invoice->set_payment_method_name( $sab_order->get_order()->get_payment_method() );
						$invoice->set_payment_method_title( $sab_order->get_order()->get_payment_method_title() );
						$invoice->set_payment_transaction_id( $sab_order->get_order()->get_transaction_id() );

						if ( $sab_order->get_date_paid() ) {
							$invoice->set_date_paid( $sab_order->get_date_paid() );
						}

						$synced = true;
					}
				}

				if ( $synced ) {
					$sab_order->save();
				}
			}
		}
	}

	/**
	 * @param boolean $enable
	 * @param TaxableItem $item
	 */
	public static function set_split_tax_rounding( $enable, $item ) {
		if ( $reference_item = $item->get_reference() ) {

			/**
			 * Germanized rounds tax shares on a per position basis (in older versions).
			 */
			if ( 'woocommerce' === $reference_item->get_reference_type() ) {
			    if ( $document = $item->get_document() ) {
			        if ( $order = $document->get_order() ) {
			           if ( $order->allow_round_split_taxes_at_subtotal() ) {
			               return $enable;
			           }
			        }
			    }

				return false;
			}
		}

		return $enable;
	}

	/**
	 * @param \WC_Order|integer $order
	 *
	 * @return Order|boolean
	 */
	public static function get_order( $order ) {
		try {
			return new Order( $order );
		} catch ( \Exception $e ) {
			return false;
		}
	}

	public static function get_order_statuses() {
		return wc_get_order_statuses();
	}

	public static function get_emails() {
		return WC()->mailer()->get_emails();
	}

	public static function get_order_emails() {
		$emails       = self::get_emails();
		$whitelist    = apply_filters( 'storeabill_woo_order_transactional_email_ids_whitelist', array() );
		$blacklist    = apply_filters( 'storeabill_woo_order_transactional_email_ids_blacklist', array() );
		$order_emails = array();

		foreach( $emails as $email ) {
			if ( ( in_array( $email->id, $whitelist ) || strpos( $email->id, 'order' ) !== false ) && ! in_array( $email->id, $blacklist ) ) {
				$order_emails[] = $email;
			}
		}

		return $order_emails;
	}

	/**
	 * @return \WC_Payment_Gateway[]
	 */
	public static function get_available_payment_methods() {
		return WC()->payment_gateways()->payment_gateways();
	}

	public static function clean_order_status( $status ) {
		return str_replace( 'wc-', '', $status );
	}

	/**
	 * @param \WC_Order|integer $order_id
	 *
	 * @return Invoice[]
	 */
	public static function get_invoices( $order_id, $query_args = array() ) {
		$args = wp_parse_args( array(
			'status' => array( 'closed', 'cancelled' ),
			'type'   => array( 'simple', 'cancellation' )
		), $query_args );

		$args['reference_id']   = $order_id;
		$args['reference_type'] = 'woocommerce';

		$invoices = sab_get_invoices( $args );

		if ( empty( $query_args ) ) {
			return apply_filters( 'storeabill_woo_get_order_invoices', $invoices, $order_id, $args );
		} else {
			return $invoices;
		}
	}

	/**
	 * @param \WC_Order_Item $order_item
	 *
	 * @return OrderItem
	 */
	public static function get_order_item( $order_item ) {
		// Remove _accounting item type prefix.
		$document_item_type = str_replace( 'accounting_', '', self::get_document_item_type( $order_item->get_type() ) );
		$classname          = '\Vendidero\StoreaBill\WooCommerce\OrderItem' . ucfirst( $document_item_type );

		if ( ! class_exists( $classname ) ) {
			$classname = '\Vendidero\StoreaBill\WooCommerce\OrderItem';
		}

		return new $classname( $order_item );
	}

	public static function get_document_item_type( $order_item_type ) {
		$type_mapper = array(
			'line_item' => 'accounting_product',
			'fee'       => 'accounting_fee',
			'shipping'  => 'accounting_shipping',
			'tax'       => 'accounting_tax'
		);

		$type = 'accounting_product';

		if ( array_key_exists( $order_item_type, $type_mapper ) ) {
			$type = $type_mapper[ $order_item_type ];
		}

		return $type;
	}
}
