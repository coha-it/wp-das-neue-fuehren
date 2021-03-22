<?php

namespace Vendidero\StoreaBill\Interfaces;

/**
 * Product Interface
 *
 * @package  Germanized/StoreaBill/Interfaces
 * @version  1.0.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Product class.
 */
interface Product extends Reference {

	/**
	 * Return the unique identifier for the order
	 *
	 * @return mixed
	 */
	public function get_id();

	public function get_name();

	public function get_sku();

	public function get_type();

	public function is_type( $type );

	public function is_virtual();

	public function is_service();

	public function get_parent_id();

	public function get_parent();
}
