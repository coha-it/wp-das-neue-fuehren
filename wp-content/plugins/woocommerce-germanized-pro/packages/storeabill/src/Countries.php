<?php

namespace Vendidero\StoreaBill;

defined( 'ABSPATH' ) || exit;

class Countries {

	/**
	 * @return array|string[]
	 */
	public static function get_base_location() {
		return wc_get_base_location();
	}

	public static function get_base_country() {
		return self::get_base_location()['country'];
	}

	public static function get_base_state() {
		return self::get_base_location()['state'];
	}

	public static function get_base_address() {
		return WC()->countries->get_base_address();
	}

	public static function get_base_address_2() {
		return WC()->countries->get_base_address_2();
	}

	public static function get_base_city() {
		return WC()->countries->get_base_city();
	}

	public static function get_base_postcode() {
		return WC()->countries->get_base_postcode();
	}

	public static function get_base_company_name() {
		return get_bloginfo( 'name' );
	}

	public static function get_base_email() {
		return get_option( 'admin_email' );
	}

	public static function get_base_bank_account_data() {
		$accounts     = get_option( 'woocommerce_bacs_accounts' );
		$account_data = array(
			'iban'         => '',
			'account_name' => '',
			'bic'          => '',
		);

		if ( ! empty( $accounts ) ) {
			return wp_parse_args( $accounts[0], $account_data );
		} else {
			return $account_data;
		}
	}

	public static function has_base_bank_account() {
		$data = self::get_base_bank_account_data();

		return ! empty( $data['iban'] ) ? true : false;
	}

	public static function get_formatted_base_address( $separator = '<br/>', $include_company = true ) {
		$address_data = array(
			'company'   => $include_company ? self::get_base_company_name() : '',
			'address_1' => self::get_base_address(),
			'address_2' => self::get_base_address_2(),
			'postcode'  => self::get_base_postcode(),
			'city'      => self::get_base_city(),
			'country'   => self::get_base_country(),
			'state'     => self::get_base_state()
		);

		return self::get_formatted_address( $address_data, $separator );
	}

	public static function get_formatted_address( $address = array(), $separator = '<br/>' ) {
		$force = apply_filters( 'storeabill_document_address_force_country_display', false );

		if ( $force ) {
			add_filter( 'woocommerce_formatted_address_force_country_display', '__return_true', 1, 2000 );
		}

		$formatted_address = WC()->countries->get_formatted_address( $address, $separator );

		if ( $force ) {
			remove_filter( 'woocommerce_formatted_address_force_country_display', '__return_true', 2000 );
		}

		return $formatted_address;
	}

	public static function is_third_country( $country ) {
		$is_third_country = true;

		/**
		 * In case the base country is within EU consider all non-EU countries as third countries.
		 * In any other case consider every non-base-country as third country.
		 */
		if ( in_array( self::get_base_country(), self::get_eu_vat_countries() ) ) {
			$is_third_country = ! in_array( $country, self::get_eu_vat_countries() );
		} else {
			$is_third_country = $country !== self::get_base_country();
		}

		return apply_filters( 'storeabill_is_third_country', $is_third_country, $country );
	}

	public static function get_eu_countries() {
		$countries = WC()->countries->get_european_union_countries();

		return $countries;
	}

	public static function get_eu_vat_countries() {
		return apply_filters( 'storeabill_eu_vat_countries', WC()->countries->get_european_union_countries( 'eu_vat' ) );
	}

	public static function is_eu_vat_country( $country ) {
		return in_array( $country, self::get_eu_vat_countries() );
	}

	public static function is_eu_country( $country ) {
		return in_array( $country, self::get_eu_countries() );
	}
}
