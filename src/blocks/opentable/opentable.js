/**
 * External dependencies
 */
import classnames from 'classnames';
import { chunk, flatten } from 'lodash';

/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';

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
		return (
			<Fragment>
				<div
					style={ { width: '100%', position: 'absolute' } }
				/>
				<div className="iframe__overflow-wrapper">
					<iframe frameBorder="0" style={ { width: '840px', height: '350px' } } title="open table frame" src={ `//www.opentable.com/widget/reservation/canvas?rid=${ 123456 }$&domain=com&type=standard&theme=wide&overlay=false&insideiframe=true` } />
				</div>
			</Fragment>
		);
	}
}

export default OpenTable;
