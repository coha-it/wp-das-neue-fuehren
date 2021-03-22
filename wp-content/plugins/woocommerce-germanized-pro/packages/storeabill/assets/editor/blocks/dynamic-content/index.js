import { _x } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { heading } from '@wordpress/icons';
import { cloneDeep } from 'lodash';

import { getSetting } from '@storeabill/settings';

import edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
import './editor.scss';

const settings = {
    title: _x( 'Dynamic content', 'storeabill-core', 'storeabill' ),
    description: _x( 'Inserts dynamic content.', 'storeabill-core', 'storeabill' ),
    category: 'storeabill',
    icon: heading,
    example: {},
    supports: {
        html: false
    },
    attributes: {
        "blockName": {
            "type": 'string',
            "default": ''
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
    edit
};

for ( const [ blockName, blockSettings ] of Object.entries( getSetting( 'dynamicContentBlocks' ) ) ) {
    const curSettings = cloneDeep( settings );
    const newSettings = { ...curSettings, ...blockSettings };

    newSettings.attributes['blockName']['default'] = blockName;

    registerBlockType( 'storeabill/' + blockName, newSettings );
}
