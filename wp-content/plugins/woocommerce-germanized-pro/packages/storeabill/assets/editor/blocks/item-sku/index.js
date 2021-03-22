import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { fingerprint } from '@storeabill/icons';

import edit from './edit';
import save from './save';

const settings = {
    title: _x( 'Item SKU', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts the item SKU.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: fingerprint,
    parent: [ 'storeabill/item-table-column' ],
    example: {},
    attributes: {
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
            "selector": 'p.sab-block-item-content',
            "default": ''
        },
    },
    edit,
    save
};

registerBlockType( 'storeabill/item-sku', settings );
