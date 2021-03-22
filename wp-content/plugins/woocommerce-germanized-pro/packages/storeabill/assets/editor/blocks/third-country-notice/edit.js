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
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

import { PanelBody } from "@wordpress/components";
import { compose } from "@wordpress/compose";
import { FORMAT_TYPES } from '@storeabill/settings';
import { useRef } from "@wordpress/element";

function ThirdCountryNoticeEdit( {
    attributes,
    setAttributes,
    fontSize,
    setFontSize,
    className
} ) {
    const { content, align } = attributes;

    const classes = classnames( 'document-third-country-notice placeholder-wrapper', className, {
        [ `has-text-align-${ align }` ]: align,
        [ fontSize.class ]: fontSize.class,
    } );

    const ref = useRef();

    const {
        TextColor,
        InspectorControlsColorPanel,
    } = __experimentalUseColors(
        [
            { name: 'textColor', property: 'color' },
        ],
        [ fontSize.size ]
    );

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={ align }
                    onChange={ ( newAlign ) =>
                        setAttributes( { align: newAlign } )
                    }
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
            <span className="notice notice-warning sab-visibility-notice">{ _x( 'Conditional visibility', 'storeabill-core', 'storeabill' ) }</span>
            <TextColor>
                <RichText
                    tagName="p"
                    value={ content }
                    placeholder=""
                    className={ classes }
                    onChange={ ( value ) =>
                        setAttributes( { content: value } )
                    }
                    allowedFormats={ FORMAT_TYPES }
                    style={ {
                        fontSize: fontSize.size
                            ? fontSize.size + 'px'
                            : undefined
                    } }
                />
            </TextColor>
        </>
    );
}

const ThirdCountryNoticeEditWrapper = compose( [ withFontSizes( 'fontSize' ) ] )(
    ThirdCountryNoticeEdit
);

export default ThirdCountryNoticeEditWrapper;
