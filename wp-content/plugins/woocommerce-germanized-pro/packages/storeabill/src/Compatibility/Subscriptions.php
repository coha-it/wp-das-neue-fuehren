<?php

namespace Vendidero\StoreaBill\Compatibility;

use Vendidero\StoreaBill\Document\Document;
use Vendidero\StoreaBill\Document\Shortcodes;
use Vendidero\StoreaBill\Interfaces\Compatibility;
use Vendidero\StoreaBill\Interfaces\Reference;
use Vendidero\StoreaBill\Invoice\Invoice;
use Vendidero\StoreaBill\Invoice\Simple;
use Vendidero\StoreaBill\WooCommerce\Admin\InvoiceMetaBox;
use Vendidero\StoreaBill\WooCommerce\Order;

defined( 'ABSPATH' ) || exit;

class Subscriptions implements Compatibility {

	public static function is_active() {
		return class_exists( 'WC_Subscriptions' );
	}

	public static function init() {
		/**
		 * Hide the invoice meta box from main subscription order
		 */
		add_filter( 'storeabill_woo_order_type_shop_subscription_add_invoice_meta_box', '__return_false', 10 );

		/**
		 * Sync the date of service with the invoice
		 */
		add_action( 'storeabill_woo_order_synced_invoice', array( __CLASS__, 'sync_invoice_date_of_service' ), 50, 2 );

		/**
		 * Add order related shortcodes.
		 */
		add_filter( 'storeabill_shortcode_get_document_reference_data', array( __CLASS__, 'shortcode_result' ), 10, 4 );

		/**
		 * Register editor shortcodes.
		 */
		add_filter( 'storeabill_document_template_editor_available_shortcodes', array( __CLASS__, 'register_editor_shortcodes' ), 10, 2 );
	}

	public static function register_editor_shortcodes( $shortcodes, $document_type ) {
		if ( in_array( $document_type, array( 'invoice', 'invoice_cancellation' ) ) ) {
			$shortcodes['document'][] = array(
				'shortcode' => 'document_reference?data=subscription_numbers',
				'title'     => _x( 'Subscription order number(s)', 'storeabill-core', 'woocommerce-germanized-pro' ),
			);
		}

		return $shortcodes;
	}

	/**
	 * @param $result
	 * @param $atts
	 * @param Order $order
	 * @param Shortcodes $shortcodes
	 */
	public static function shortcode_result( $result, $atts, $order, $shortcodes ) {
		if ( $order ) {
			if ( is_a( $order, '\Vendidero\StoreaBill\WooCommerce\Order' ) && 'subscription_numbers' === $atts['data'] ) {
				$result = array();

				if ( function_exists( 'wcs_order_contains_subscription' ) &&
				     function_exists( 'wcs_get_subscriptions_for_order' ) &&
				     wcs_order_contains_subscription( $order->get_id() )
				) {
					$subscriptions = wcs_get_subscriptions_for_order( $order->get_id() );

					if ( ! empty( $subscriptions ) ) {
						foreach( $subscriptions as $subscription ) {
							$result[] = $subscription->get_order_number();
						}
					}
				/**
				 * Check if it is a renewal
				 */
				} elseif ( function_exists( 'wcs_order_contains_renewal' ) &&
				     function_exists( 'wcs_get_subscriptions_for_renewal_order' ) &&
				     wcs_order_contains_renewal( $order->get_id() )
				) {
					$subscriptions = wcs_get_subscriptions_for_renewal_order( $order->get_id() );

					if ( ! empty( $subscriptions ) ) {
						foreach ( $subscriptions as $subscription ) {
							$result[] = $subscription->get_order_number();
						}
					}
				}
			}
		} elseif( $document = $shortcodes->get_document() ) {
			if ( 'subscription_numbers' === $atts['data'] && is_a( $document, 'Vendidero\StoreaBill\Interfaces\Previewable' )  ) {
				$result = array( '1234' );
			}
		}

		return $result;
	}

	/**
	 * @param Simple $invoice
	 * @param Order $order
	 */
	public static function sync_invoice_date_of_service( $invoice, $order ) {
		$woo_order = $order->get_order();

		if ( function_exists( 'wcs_order_contains_subscription' ) &&
		     function_exists( 'wcs_add_time' ) &&
		     function_exists( 'wcs_get_subscriptions_for_order' ) &&
		     wcs_order_contains_subscription( $woo_order, 'any' ) )
		{
			$subscriptions = wcs_get_subscriptions_for_order( $woo_order, array( 'order_type' => 'any' ) );
			$start_date    = $invoice->get_date_of_service();

			foreach( $subscriptions as $subscription ) {
				$end_date = wcs_add_time( $subscription->get_billing_interval(), $subscription->get_billing_period(), $start_date->getTimestamp() );

				if ( $end_date ) {
					$invoice->set_date_of_service_end( $end_date );
				}
			}
		}
	}
}
