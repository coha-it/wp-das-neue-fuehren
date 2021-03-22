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
    RichText,
} from '@wordpress/block-editor';

import { getPreviewItem, FORMAT_TYPES } from '@storeabill/settings';
import { replacePreviewWithPlaceholder, replacePlaceholderWithPreview } from "@storeabill/utils";

import { PanelBody } from "@wordpress/components";
import { compose } from "@wordpress/compose";

function ItemNameEdit( {
    className,
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
} ) {
    const { content } = attributes;
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

    const classes = classnames( 'sab-block-item-content placeholder-wrapper sab-block-item-name', className, {
        [ fontSize.class ]: fontSize.class,
    } );

    const name = item.name;

    return (
        <div>
            <InspectorControls>
                <PanelBody title={ _x( 'Typography', 'storeabill-core', 'storeabill' ) }>
                    <FontSizePicker
                        value={ fontSize.size }
                        onChange={ setFontSize }
                    />
                </PanelBody>
            </InspectorControls>
            { InspectorControlsColorPanel }
            <TextColor>
                <RichText
                  tagName="p"
                  value={ replacePlaceholderWithPreview( content, name, '{content}', false, _x( 'Item Name', 'storeabill-core', 'storeabill' ) ) }
                  placeholder={ replacePlaceholderWithPreview( undefined, name, '{content}', false, _x( 'Item Name', 'storeabill-core', 'storeabill' ) ) }
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
    );
}

const ItemNameEditor = compose( [ withFontSizes( 'fontSize' ) ] )(
    ItemNameEdit
);

export default ItemNameEditor;
