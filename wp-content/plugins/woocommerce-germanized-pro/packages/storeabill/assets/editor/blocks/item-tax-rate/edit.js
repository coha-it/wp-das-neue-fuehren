/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import {
    FontSizePicker,
    InspectorControls,
    withFontSizes,
    __experimentalUseColors,
    RichText,
} from '@wordpress/block-editor';

import { getPreviewItem, FORMAT_TYPES } from '@storeabill/settings';
import { replacePreviewWithPlaceholder, replacePlaceholderWithPreview } from "@storeabill/utils";

import { PanelBody } from "@wordpress/components";
import { compose } from "@wordpress/compose";

const ItemTaxRateEdit = ( {
   attributes,
   setAttributes,
   fontSize,
   setFontSize,
   className
} ) => {
    const { content } = attributes;
    let item = getPreviewItem();

    const taxRate = item.tax_rates[0].formatted_percentage_html;

    const {
        TextColor,
        InspectorControlsColorPanel
    } = __experimentalUseColors(
        [
            { name: 'textColor', property: 'color' },
        ],
        [ fontSize.size ]
    );

    return (
        <>
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
                        value={ replacePlaceholderWithPreview( content, taxRate, '{content}', false, _x( 'Tax Rate', 'storeabill-core', 'storeabill' ) ) }
                        placeholder={ replacePlaceholderWithPreview( undefined, taxRate, '{content}', false, _x( 'Tax Rate', 'storeabill-core', 'storeabill' ) ) }
                        className='sab-block-item-content placeholder-wrapper'
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

const ItemTaxRateEditor = compose( [ withFontSizes( 'fontSize' ) ] )(
    ItemTaxRateEdit
);

export default ItemTaxRateEditor;
