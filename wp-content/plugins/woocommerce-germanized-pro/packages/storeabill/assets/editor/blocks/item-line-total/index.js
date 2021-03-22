import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { euro } from '@storeabill/icons';

import edit from './edit';
import save from './save';

const settings = {
    title: _x( 'Item Line Total', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts item line total.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: euro,
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
        "discountTotalType": {
            "type": "string",
            "default": "before_discounts"
        },
        "showPricesIncludingTax": {
            "type": "boolean",
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

registerBlockType( 'storeabill/item-line-total', settings );
