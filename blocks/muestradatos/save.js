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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return <div { ...blockProps }>
		<div className={`flex justify-between -skew-x-12 not-prose ${attributes.align}`.trimEnd()}>
			<div className='flex flex-col p-4 border-l-4 border-r-4 blqe border-rojo border-b-20 bg-blanco'>
				<p className='my-4 mt-0 text-2xl font-bold skew-x-12 leyenda text-rojo'>{ attributes.leyenda1 }</p>
				<p className='my-0 text-5xl font-bold skew-x-12 dato text-rojo'>{ attributes.dato1 }</p>
			</div>
			<div className='flex flex-col p-6 border-r-4 blqe border-rojo border-b-20 bg-blanco'>
				<p className='my-4 mt-0 text-2xl font-bold skew-x-12 leyenda text-rojo'>{ attributes.leyenda2 }</p>
				<p className='my-0 text-5xl font-bold skew-x-12 dato text-rojo'>{ attributes.dato2 }</p>
			</div>
			<div className='flex flex-col p-6 border-r-4 blqe border-rojo border-b-20 bg-blanco'>
				<p className='my-4 mt-0 text-2xl font-bold skew-x-12 leyenda text-rojo'>{ attributes.leyenda3 }</p>
				<p className='my-0 text-5xl font-bold skew-x-12 dato text-rojo'>{ attributes.dato3 }</p>
			</div>
		</div>
	</div>;
}