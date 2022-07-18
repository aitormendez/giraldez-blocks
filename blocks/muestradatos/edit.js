/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * TextControl is a component that renders a text input.
 */
import { TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( { attributes, setAttributes } ) {
	
	return (
		<div { ...useBlockProps() }>
			<div>
				<TextControl
					label={ __( 'Leyenda 1', 'giraldez-blocks' ) }
					value={ attributes.leyenda1 }
					onChange={ ( val ) => setAttributes( { leyenda1: val } ) }
				/>
				<TextControl
					label={ __( 'Dato 1', 'giraldez-blocks' ) }
					value={ attributes.dato1 }
					onChange={ ( val ) => setAttributes( { dato1: val } ) }
				/>
			</div>

			<div>
				<TextControl
					label={ __( 'Leyenda 2', 'giraldez-blocks' ) }
					value={ attributes.leyenda2 }
					onChange={ ( val ) => setAttributes( { leyenda2: val } ) }
				/>
				<TextControl
					label={ __( 'Dato 2', 'giraldez-blocks' ) }
					value={ attributes.dato2 }
					onChange={ ( val ) => setAttributes( { dato2: val } ) }
				/>
			</div>

			<div>
				<TextControl
					label={ __( 'Leyenda 3', 'giraldez-blocks' ) }
					value={ attributes.leyenda3 }
					onChange={ ( val ) => setAttributes( { leyenda3: val } ) }
				/>
				<TextControl
					label={ __( 'Dato 3', 'giraldez-blocks' ) }
					value={ attributes.dato3 }
					onChange={ ( val ) => setAttributes( { dato3: val } ) }
				/>
			</div>

		</div>
	);
}
