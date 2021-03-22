import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { archive } from '@wordpress/icons';

import edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
import './editor.scss';

const settings = {
    title: _x( 'Reverse Charge Notice', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts a reverse charge VAT notice if applicable.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: archive,
    example: {},
    supports: {
        html: false,
        className: false,
    },
    attributes: {
        "content": {
            "type": 'string',
            "source": 'html',
            "selector": 'p',
            "default": _x( 'Tax liability of the recipient of the services.', 'storeabill-core', 'storeabill' )
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
            "type": "string"
        },
        "customFontSize": {
            "type": "number"
        },
    },
    edit,
    save
};

registerBlockType( 'storeabill/reverse-charge-notice', settings );
