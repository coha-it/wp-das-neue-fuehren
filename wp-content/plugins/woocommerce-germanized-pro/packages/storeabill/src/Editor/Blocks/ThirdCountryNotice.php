<?php
/**
 * All products block.
 *
 * @package WooCommerce\Blocks
 */

namespace Vendidero\StoreaBill\Editor\Blocks;

use Vendidero\StoreaBill\Countries;
use Vendidero\StoreaBill\Document\Document;

defined( 'ABSPATH' ) || exit;

/**
 * AllProducts class.
 */
class ThirdCountryNotice extends DynamicBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'third-country-notice';

	public function get_attributes() {
		return array(
			'textSize'  => $this->get_schema_number( sab_get_document_default_font_size() ),
			'align'     => $this->get_schema_align(),
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
		$country          = $document->get_country();

		if ( apply_filters( 'storeabill_use_third_country_notice_shipping_country', true, $document ) && is_callable( array( $document, 'get_shipping_country' ) ) ) {
			$country = $document->get_shipping_country();

			if ( empty( $country ) ) {
				$country = $document->get_country();
			}
		}

		if ( ! empty( $country ) && Countries::is_third_country( $country ) ) {
			$this->content = $content;
		}

		return $this->content;
	}
}
