<?php

namespace Vendidero\StoreaBill\WooCommerce;
use Vendidero\StoreaBill\Interfaces\SyncableReferenceItem;
use Vendidero\StoreaBill\Invoice\ProductItem;
use WC_Order_Item;

defined( 'ABSPATH' ) || exit;

/**
 * WooOrder class
 */
class OrderItemProduct extends OrderItemTaxable {

	/**
	 * @param ProductItem $document_item
	 */
	public function sync( &$document_item, $args = array() ) {
		parent::sync( $document_item, $args );

		$document_item->set_product_id( $this->get_product_id() );

		$is_virtual = false;
		$is_service = false;
		$sku        = '';

		if ( $product = $document_item->get_product() ) {
			$is_virtual = $product->is_virtual();
			$is_service = $product->is_service();
			$sku        = $product->get_sku();
		}

		$props = array(
			'is_virtual' => $is_virtual,
			'is_service' => $is_service,
			'sku'        => $sku,
		);

		$props = apply_filters( "{$this->get_hook_prefix()}sync_props", $props, $this, $args );

		$document_item->set_props( $props );

		do_action( "{$this->get_hook_prefix()}synced", $this, $document_item, $args );
	}

	public function get_product_id() {
		if ( is_callable( array( $this->order_item, 'get_variation_id' ) ) && $this->order_item->get_variation_id() ) {
			return $this->order_item->get_variation_id();
		} elseif ( is_callable( array( $this->order_item, 'get_product_id' ) ) ) {
			return $this->order_item->get_product_id();
		} else {
			return 0;
		}
	}
}
