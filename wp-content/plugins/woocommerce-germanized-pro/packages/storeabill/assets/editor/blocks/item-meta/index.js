import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getDefaultPlaceholderContent } from "@storeabill/utils";
import { meta } from '@storeabill/icons';

import edit from './edit';
import save from './save';

const settings = {
    title: _x( 'Item Meta', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts item meta data.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: meta,
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
        "metaType": {
            "type": "string"
        },
        "hideIfEmpty": {
            "type": "boolean",
            "default": true,
        },
        "content": {
            "type": 'string',
            "source": 'html',
            "selector": 'p.sab-block-item-content',
            "default": '{content}'
        },
    },
    edit,
    save
};

registerBlockType( 'storeabill/item-meta', settings );
