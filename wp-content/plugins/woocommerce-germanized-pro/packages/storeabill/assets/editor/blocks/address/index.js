import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { address } from '@storeabill/icons';

import edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
import './editor.scss';

const settings = {
    title: _x( 'Address', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts the document address.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: address,
    supports: {
        html: false,
    },
    example: {},
    attributes: {
        align: {
            type: "string",
            default: "left",
        },
        heading: {
            "type": 'string',
            "source": 'html',
            "selector": 'p.address-heading',
            "default": ''
        },
        "textColor": {
            "type": "string"
        },
        "customTextColor": {
            "type": "string"
        },
        "fontSize": {
            "type": "string"
        },
        "customFontSize": {
            "type": "number"
        },
        "content": {
            "type": 'string',
            "source": 'html',
            "selector": 'p.address-content',
            "default": getDefaultPlaceholderContent( '{content}' )
        },
    },
    edit,
    save
};

registerBlockType( 'storeabill/address', settings );
