<?php

namespace Vendidero\StoreaBill\WooCommerce;
use WC_Product;

defined( 'ABSPATH' ) || exit;

/**
 * WooProduct class
 */
class Product implements \Vendidero\StoreaBill\Interfaces\Product {

	/**
	 * The actual product object
	 *
	 * @var WC_Product
	 */
	protected $product;

	/**
	 * @param WC_Product|integer $product
	 */
	public function __construct( $product ) {
		if ( is_numeric( $product ) ) {
			$product = wc_get_product( $product );

			if ( ! is_a( $product, 'WC_Product' ) ) {
				throw new \Exception( _x( 'Invalid product.', 'storeabill-core', 'woocommerce-germanized-pro' ) );
			}
		}

		$this->product = $product;
	}

	/**
	 * Returns the Woo WC_Product original object
	 *
	 * @return object|WC_Product
	 */
	public function get_product() {
		return $this->product;
	}

	public function get_object() {
		return $this->get_product();
	}

	public function get_reference_type() {
		return 'woocommerce';
	}

	public function get_id() {
		return $this->product->get_id();
	}

	public function get_name() {
		return $this->product->get_name();
	}

	public function get_sku() {
		return $this->product->get_sku();
	}

	public function get_type() {
		return $this->product->get_type();
	}

	public function is_type( $type ) {
		return $this->product->is_type( $type );
	}

	public function is_virtual() {
		return $this->product->is_virtual();
	}

	public function is_service() {
		$is_service = wc_string_to_bool( $this->product->get_meta( '_service' ) );

		return $is_service;
	}

	public function get_parent_id() {
		return $this->product->get_parent_id();
	}

	public function get_parent() {
		$parent_id = $this->get_parent_id();

		if ( $parent_id > 0 ) {
			return \Vendidero\StoreaBill\References\Product::get_product( $parent_id, $this->get_reference_type() );
		}

		return false;
	}

	public function get_meta( $key, $single = true, $context = 'view' ) {
		return $this->product->get_meta( $key, $single, $context );
	}

	/**
	 * Check if a method is callable by checking the underlying order object.
	 * Necessary because is_callable checks will always return true for this object
	 * due to overloading __call.
	 *
	 * @param $method
	 *
	 * @return bool
	 */
	public function is_callable( $method ) {
		if ( method_exists( $this, $method ) ) {
			return true;
		} elseif( is_callable( array( $this->get_product(), $method ) ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Call child methods if the method does not exist.
	 *
	 * @param $method
	 * @param $args
	 *
	 * @return bool|mixed
	 */
	public function __call( $method, $args ) {
		if ( method_exists( $this->product, $method ) ) {
			return call_user_func_array( array( $this->product, $method ), $args );
		}

		return false;
	}
}
