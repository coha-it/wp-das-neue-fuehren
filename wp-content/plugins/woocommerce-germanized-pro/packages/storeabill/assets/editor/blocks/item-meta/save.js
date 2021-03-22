/**
 * External dependencies
 */
import classnames from 'classnames';
import {
    getColorClassName,
    getFontSizeClass,
    RichText,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

    const {
        textColor,
        customTextColor,
        fontSize,
        customFontSize,
        content
    } = attributes;

    const textClass = getColorClassName( 'color', textColor );
    const fontSizeClass = getFontSizeClass( fontSize );

    const className = classnames( 'sab-block-item-content', {
        'has-text-color': textColor || customTextColor,
        [ fontSizeClass ]: fontSizeClass,
        [ textClass ]: textClass,
    } );

    const styles = {
        color: textClass ? undefined : customTextColor,
        fontSize: fontSizeClass ? undefined : customFontSize,
    };

    return (
        <RichText.Content
            tagName="p"
            className={ className }
            value={ content }
            style={ styles }
        />
    );
}
