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
		content,
		heading,
		align,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
	} = attributes;

	const textClass     = getColorClassName( 'color', textColor );
	const fontSizeClass = getFontSizeClass( fontSize );

	const className = classnames( 'sab-document-address', {
		'has-text-color': textColor || customTextColor,
		[ `has-text-align-${ align }` ]: align,
		[ fontSizeClass ]: fontSizeClass,
		[ textClass ]: textClass,
	} );

	const styles = {
		color: textClass ? undefined : customTextColor,
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	return (
		<div className={ className } style={ styles }>
			<RichText.Content
				tagName="p"
				value={ heading }
				className="address-heading"
			/>
			<RichText.Content
				tagName="p"
				className="address-content"
				value={ content }
			/>
		</div>
	);
}
