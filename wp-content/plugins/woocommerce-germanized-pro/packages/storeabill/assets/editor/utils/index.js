import { isEmpty, includes, concat } from 'lodash';

export * from './error';

export function getDefaultPlaceholderContent( placeholder, tooltip = '' ) {
	return '<span class="placeholder-content ' + ( ! isEmpty( tooltip ) ? 'sab-tooltip' : '' ) + '" contenteditable="false" ' + ( ! isEmpty( tooltip ) ? 'data-tooltip="' + tooltip + '"' : '' ) + '><span class="editor-placeholder"></span>' + placeholder + '</span>';
}

export function replacePlaceholderWithPreview( content, replacement, placeholder, defaultContent, tooltip = '' ) {
	if ( ! content || ! includes( content, placeholder ) ) {
		if ( ! includes( content, '{default}' ) ) {
			content = defaultContent ? defaultContent : getDefaultPlaceholderContent( placeholder, tooltip );
		} else {
			content = content.replace( '{default}', defaultContent ? defaultContent : getDefaultPlaceholderContent( placeholder, tooltip ) );
		}
	}

	return content.replace( placeholder, replacement );
}

export function replaceOptionalPlaceholderWithPreview( content, replacement, placeholder ) {
	return content.replace( placeholder, replacement );
}

export function replacePreviewWithPlaceholder( content, placeholder, query = 'placeholder-content', byData = false ) {
	const doc	   = new DOMParser().parseFromString( content, 'text/html' );
	let rawElement = false;

	if ( byData ) {
		rawElement = doc.querySelectorAll("[data-shortcode='" + query + "']");
	} else {
		rawElement = doc.getElementsByClassName( query );
	}

	if ( rawElement.length > 0 ) {
		const editorNode = rawElement[0].getElementsByClassName( 'editor-placeholder' );

		if ( editorNode.length > 0 ) {
			let sibling = editorNode[0].nextSibling;
			let siblings = [];

			// Find all siblings after editor-node
			while ( sibling ) {
				if ( sibling !== editorNode[0] ) {
					siblings.push( sibling );
				}
				sibling = sibling.nextSibling;
			}

			// Remove siblings
			siblings.forEach( ( sibling ) => {
				editorNode[0].parentNode.removeChild( sibling )
			} );

			// Insert placeholder after the .editor-placeholder element
			editorNode[0].insertAdjacentHTML( 'afterEnd', placeholder );
		} else {
			rawElement[0].innerHTML = '<span class="editor-placeholder"></span>' + placeholder;
		}

		rawElement[0].classList.remove('document-shortcode-needs-refresh' );

		content = doc.body.innerHTML;
	}

	return content;
}
