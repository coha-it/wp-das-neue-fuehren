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

import { getPreviewItem, FORMAT_TYPES } from '@storeabill/settings';
import { replacePreviewWithPlaceholder, replacePlaceholderWithPreview } from "@storeabill/utils";

import { PanelBody } from "@wordpress/components";
import { compose } from "@wordpress/compose";

function ItemDifferentialTaxationNoticeEdit( {
    className,
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
} ) {
    const { content } = attributes;

    const {
        TextColor,
        InspectorControlsColorPanel
    } = __experimentalUseColors(
        [
            { name: 'textColor', property: 'color' },
        ],
        [ fontSize.size ]
    );

    const classes = classnames( 'sab-block-item-content placeholder-wrapper sab-block-item-differential-taxation-notice', className, {
        [ fontSize.class ]: fontSize.class,
    } );

    return (
        <>
            <BlockControls>
                <span className="notice notice-warning sab-visibility-notice">{ _x( 'Conditional visibility', 'storeabill-core', 'storeabill' ) }</span>
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
            <TextColor>
                <RichText
                  tagName="p"
                  value={ content }
                  className={ classes }
                  onChange={ ( value ) =>
                    setAttributes( { content: value } )
                  }
                  allowedFormats={ FORMAT_TYPES }
                  style={ {
                      fontSize: fontSize.size
                        ? fontSize.size + 'px'
                        : undefined,
                  } }
                />
            </TextColor>
        </>
    );
}

const ItemDifferentialTaxationNoticeEditor = compose( [ withFontSizes( 'fontSize' ) ] )(
    ItemDifferentialTaxationNoticeEdit
);

export default ItemDifferentialTaxationNoticeEditor;
