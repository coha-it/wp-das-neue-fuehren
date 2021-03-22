/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import classnames from 'classnames';

import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody } from "@wordpress/components";
import { getPreview, FORMAT_TYPES } from '@storeabill/settings';
import {
  FontSizePicker,
  InspectorControls,
  withFontSizes,
  __experimentalUseColors,
  RichText,
} from '@wordpress/block-editor';

import { replacePreviewWithPlaceholder, replacePlaceholderWithPreview } from "@storeabill/utils";
import { compose } from "@wordpress/compose";

const AddressEdit = ( {
  attributes,
  setAttributes,
  fontSize,
  setFontSize,
    className
} ) => {

    const { align, heading, content } = attributes;
    let preview = getPreview();

    const address = preview.formatted_address;

    const classes = classnames( 'document-address address-wrapper', className, {
        [ `has-text-align-${ align }` ]: align
    } );

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
        <div>
            <BlockControls>
                <AlignmentToolbar
                    value={ align }
                    onChange={ ( updatedAlignment ) => setAttributes( { align: updatedAlignment } ) }
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
            <div className={ classes }>
              <TextColor>
                <RichText
                    className="address-heading"
                    value={heading}
                    tagName="p"
                    allowedFormats={FORMAT_TYPES}
                    onChange={(value) =>
                        setAttributes({heading: value})
                    }
                />
                <RichText
                  tagName="p"
                  value={ replacePlaceholderWithPreview( content, address, '{content}' ) }
                  placeholder={ replacePlaceholderWithPreview( undefined, address, '{content}' ) }
                  className='sab-address-content placeholder-wrapper'
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
        </div>
    );
};

const AddressEditor = compose( [ withFontSizes( 'fontSize' ) ] )(
  AddressEdit
);

export default AddressEditor;
