import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { heading } from '@wordpress/icons';

import edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
import './editor.scss';

const settings = {
    title: _x( 'Document Title', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts the document title.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: heading,
    example: {},
    supports: {
        html: false,
        className: false,
    },
    attributes: {
        "title": {
            "type": 'string',
            "source": 'html',
            "selector": 'p'
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
    },
    edit,
    save
};

registerBlockType( 'storeabill/document-title', settings );
