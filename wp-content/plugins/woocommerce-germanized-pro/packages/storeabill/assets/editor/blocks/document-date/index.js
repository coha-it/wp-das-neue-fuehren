import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { getSetting } from "@storeabill/settings";
import { date } from '@storeabill/icons';

import edit from './edit';
import save from './save';

const settings = {
    title: _x( 'Document Date', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts the document date.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    example: {},
    icon: date,
    supports: {
        html: false,
        className: false,
    },
    attributes: {
        "content": {
            "type": 'string',
            "source": 'html',
            "selector": 'p',
            "default": getDefaultPlaceholderContent( '{content}', _x( 'Date', 'storeabill-core', 'storeabill' ) )
        },
        "align": {
            "type": 'string',
            "default": 'left'
        },
        "textColor": {
            "type": "string"
        },
        "customTextColor": {
            "type": "string"
        },
        "fontSize": {
            "type": "string",
        },
        "customFontSize": {
            "type": "number"
        },
        "format": {
            "type": "string",
            "default": getSetting( 'dateFormat' )
        },
        "dateType": {
            "type": "string",
            "default": 'date'
        }
    },
    edit,
    save
};

registerBlockType( 'storeabill/document-date', settings );
