/**
 * External dependencies
 */
import { LogosIcon as icon } from '@godaddy-wordpress/coblocks-icons';
import { useState } from 'react';
/**
 * Internal dependencies
 */
import Controls from './controls';
import OpenTable from './opentable';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import {
	Placeholder,
	Button,
	withNotices,
	Icon,
	TextControl,
} from '@wordpress/components';

const Edit = ( props ) => {
	// const onSelectImages = ( images ) => {
	// 	props.setAttributes( { images: images.map( ( image ) => pickRelevantMediaFiles( image ) ) } );
	// };

	// const onDropImages = ( images ) => {
	// 	const imagesNormalized = images.map( ( image ) => pickRelevantMediaFiles( image ) );
	// 	const currentImages = props.attributes.images || [];
	// 	props.setAttributes( { images: currentImages.concat( imagesNormalized )	} );
	// };

	// const { className, noticeOperations, attributes, noticeUI, isSelected } = props;

	const [ restaurantID, setRestaurantID ] = useState();

	const { className, isSelected, attributes, setAttributes } = props;
	const renderOpenTable = ( event ) => {
		if ( event ) {
			event.preventDefault();
		}

		// setAttributes( { restaurantID: restaurantID } );
	};

	// const hasRestaurantID = !! attributes.restaurantID.length;
	const hasRestaurantID = false;

	return (
		<>
			<Controls { ...props } />

			<div className={ className }>
				<OpenTable { ...props } />

				{ ( ! hasRestaurantID || isSelected ) && (
					<Placeholder
						icon={ <Icon icon={ icon } /> }
						label={ __( 'OpenTable', 'coblocks' ) }
						instructions={ __(
							'Enter your OpenTable Restaurant ID to show the reservations widget.',
							'coblocks'
						) }
					>
						<form onSubmit={ renderOpenTable }>
							<TextControl
								value={ restaurantID || '' }
								className="components-placeholder__input"
								placeholder={ __(
									'Restaurant ID',
									'coblocks'
								) }
								onChange={ ( newRestaurantID ) =>
									setRestaurantID( newRestaurantID )
								}
							/>
							<Button
								isPrimary={ !! restaurantID }
								isSecondary={ ! restaurantID }
								type="submit"
								disabled={ ! restaurantID }
							>
								{ __( 'Embed', 'coblocks' ) }
							</Button>
						</form>
					</Placeholder>
				) }
			</div>
		</>
	);
};

export default compose( [ withNotices ] )( Edit );
