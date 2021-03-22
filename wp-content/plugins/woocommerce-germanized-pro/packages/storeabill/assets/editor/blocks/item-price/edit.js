/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import classnames from 'classnames';

import {
    FontSizePicker,
    InspectorControls,
    withFontSizes,
    __experimentalUseColors,
    BlockControls,
    RichText,
} from '@wordpress/block-editor';

import { PanelBody, Toolbar } from "@wordpress/components";
import { compose } from "@wordpress/compose";

import { getPreviewItem, getItemTotalKey, DISCOUNT_TOTAL_TYPES, FORMAT_TYPES } from '@storeabill/settings';
import { replacePreviewWithPlaceholder, replacePlaceholderWithPreview } from "@storeabill/utils";
import { DiscountTotalTypeSelect } from "@storeabill/components/discount-total-type-select";

import { arrowRight, settings } from '@storeabill/icons';
import { isEmpty } from 'lodash';

import { withSelect, useSelect } from "@wordpress/data";

const ItemPriceEdit = ( {
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
    className,
    showPricesIncludingTax
} ) => {
    const { discountTotalType, content } = attributes;
    let item = getPreviewItem();

    const {
        TextColor,
        InspectorControlsColorPanel
    } = __experimentalUseColors(
        [
            { name: 'textColor', property: 'color' },
        ],
        [ fontSize.size ]
    );

    const total = item[ getItemTotalKey( 'price', showPricesIncludingTax, discountTotalType ) ];

    const classes = classnames( 'sab-block-item-content placeholder-wrapper sab-block-item-price', className, {
        [ fontSize.class ]: fontSize.class,
    } );

    return (
        <>
            <BlockControls>
                <DiscountTotalTypeSelect
                    currentType={ discountTotalType }
                    onChange={ ( value ) => setAttributes( { discountTotalType: value } ) }
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ _x( 'Typography', 'storeabill-core', 'storeabill' ) }>
                    <FontSizePicker
                        value={ fontSize.size }
                        onChange={ setFontSize }
                    />
                </PanelBody>
            </InspectorControls>
            { InspectorControlsColorPanel }
            <div>
                <TextColor>
                  <RichText
                    tagName="p"
                    value={ replacePlaceholderWithPreview( content, total, '{content}', false, _x( 'Item Price', 'storeabill-core', 'storeabill' ) ) }
                    placeholder={ replacePlaceholderWithPreview( undefined, total, '{content}', false, _x( 'Item Price', 'storeabill-core', 'storeabill' ) ) }
                    className={ classes }
                    onChange={ ( value ) =>
                      setAttributes( { content: replacePreviewWithPlaceholder( value, '{content}' ) } )
                    }
                    allowedFormats={ FORMAT_TYPES }
                    style={ {
                      fontSize: fontSize.size
                        ? fontSize.size + 'px'
                        : undefined,
                    } }
                  />
                </TextColor>
            </div>
        </>
    );
};

export default compose(
    withFontSizes( 'fontSize' ),
    withSelect( ( select, ownProps ) => {
        const { clientId } = ownProps;
        const { getBlockRootClientId, getBlockAttributes } = select( 'core/block-editor' );

        const columnClientId  = getBlockRootClientId( clientId );
        const tableClientId   = getBlockRootClientId( columnClientId );
        const tableAttributes = getBlockAttributes( tableClientId );

        ownProps.attributes.showPricesIncludingTax = tableAttributes.showPricesIncludingTax;

        return {
            showPricesIncludingTax: tableAttributes.showPricesIncludingTax
        };
} ) ) ( ItemPriceEdit );