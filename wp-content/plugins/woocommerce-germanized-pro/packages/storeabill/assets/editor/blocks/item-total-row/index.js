import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { euro } from '@storeabill/icons';

import edit from './edit';

const settings = {
    title: _x( 'Item Total Row', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts an item total row.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: euro,
    parent: [ 'storeabill/item-totals' ],
    example: {},
    attributes: {
        "content": {
            "type": 'string',
            "default": ''
        },
        totalType: {
            type: "string",
            default: "",
        },
        borders: {
            "type": "array",
            "default": []
        },
        customBorderColor : {
            "type": "string"
        },
        borderColor: {
            "type": "string"
        },
        backgroundColor: {
            "type": "string"
        },
        customBackgroundColor: {
            "type": "string"
        },
        customTextColor : {
            "type": "string"
        },
        textColor: {
            "type": "string"
        },
        "fontSize": {
            "type": "string"
        },
        "customFontSize": {
            "type": "number"
        },
        heading: {
            type: "string",
            default: "",
        },
        hideIfEmpty: {
            type: "boolean",
            default: false,
        },
    },
    edit
};

registerBlockType( 'storeabill/item-total-row', settings );
