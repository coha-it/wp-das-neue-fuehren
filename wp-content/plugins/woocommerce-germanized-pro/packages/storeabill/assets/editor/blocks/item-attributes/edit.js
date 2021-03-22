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
} from '@wordpress/block-editor';

import { getPreviewItem } from '@storeabill/settings';
import { PanelBody } from "@wordpress/components";
import { compose } from "@wordpress/compose";

const ItemAttributesEdit = ( {
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
    className
} ) => {
    const {} = attributes;
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

    const classes = classnames( 'sab-block-item-content sab-block-item-attributes', className, {
        [ fontSize.class ]: fontSize.class,
    } );

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
                    <div
                        className={ classes }
                        dangerouslySetInnerHTML={ {
                            __html: item.attributes_formatted,
                        } }
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

const ItemAttributesEditor = compose( [ withFontSizes( 'fontSize' ) ] )(
    ItemAttributesEdit
);

export default ItemAttributesEditor;
