import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { quantity } from '@storeabill/icons';

import edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
import './editor.scss';

const settings = {
    title: _x( 'Page number', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts the page number.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: quantity,
    supports: {
        html: false
    },
    parent: [ 'storeabill/header', 'storeabill/footer' ],
    example: {},
    attributes: {
        align: {
            type: "string",
            default: "left",
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
            "selector": 'p',
            "default": ''
        },
    },
    edit,
    save
};

registerBlockType( 'storeabill/page-number', settings );
