<?php
/**
 * All products block.
 *
 * @package WooCommerce\Blocks
 */

namespace Vendidero\StoreaBill\Editor\Blocks;

use Vendidero\StoreaBill\Document\Document;
use Vendidero\StoreaBill\Document\Item;

defined( 'ABSPATH' ) || exit;

class Barcode extends DynamicBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'barcode';

	public function get_attributes() {
		return array(
			'barcodeType' => array(
				'type'    => 'string',
				'enum'    => array_keys( sab_get_barcode_types() ),
				'default' => 'C39',
			),
			'codeType'    => $this->get_schema_string( 'document?data=order_number' ),
			'size'        => $this->get_schema_string( "normal" ),
		);
	}

	/**
	 * Append frontend scripts when rendering the Product Categories List block.
	 *
	 * @param array  $attributes Block attributes. Default empty array.
	 * @param string $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {
		self::maybe_setup_document();

		if ( ! isset( $GLOBALS['document'] ) ) {
			return $content;
		}

		/**
		 * @var Document $document
		 */
		$document         = $GLOBALS['document'];
		$this->attributes = $this->parse_attributes( $attributes );
		$this->content    = $content;
		$shortcode_query  = sab_query_to_shortcode( $this->attributes['codeType'] );
		$code             = trim( do_shortcode( $shortcode_query ) );
		$barcode_type     = $this->attributes['barcodeType'];
		$styles           = sab_generate_block_styles( $this->attributes );
		$size             = 1;

		if ( 'small' === $this->attributes['size'] ) {
			$size = 0.8;
		} elseif( 'medium' === $this->attributes['size'] ) {
			$size = 1.5;
		} elseif( 'big' === $this->attributes['size'] ) {
			$size = 2;
		}

		if ( ! empty( $code ) ) {
			$this->content = '<barcode error="M" disableborder="1" style="' . sab_print_styles( $styles, false ) . '" class="barcode" code="' . esc_attr( $code ) . '" type="' . esc_attr( $barcode_type ) .'" size="' . esc_attr( $size ) . '" />';
		}

		return $this->wrap( $this->content, $this->attributes );
	}

	protected function wrap( $output, $attributes ) {
		if ( $this->is_render_api_request() ) {
			return $output;
		}

		$classes   = sab_generate_block_classes( $attributes );
		$styles    = sab_generate_block_styles( $attributes );
		$classes[] = 'sab-barcode';
		$classes[] = 'sab-barcode-' . $this->attributes['barcodeType'];

		return '<div class="' . sab_print_html_classes( $classes, false ) . '" style="' . sab_print_styles( $styles, false ) . '">' . $output . '</div>';
	}
}
