/**
 * External dependencies
 */
import classnames from 'classnames';
import { chunk, flatten } from 'lodash';

/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { ResizableBox } from '@wordpress/components';
import { BACKSPACE } from '@wordpress/keycodes';

class OpenTable extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			selectedImage: null,
		};
	}

	componentDidUpdate( prevProps ) {
		if ( ! this.props.isSelected && prevProps.isSelected ) {
			this.setState( {
				selectedImage: null,
			} );
		}
	}

	render() {
		// let count;
		// const { isSelected } = this.props;

		// switch ( this.props.attributes.align ) {
		// 	case 'wide':
		// 		count = 4;
		// 		break;
		// 	case 'full':
		// 		count = 5;
		// 		break;
		// 	default:
		// 		count = 3;
		// 		break;
		// }

		// const imageChunks = chunk( this.props.images, count );

		return (
			<Fragment>

			</Fragment>
		);
	}
}

export default OpenTable;
