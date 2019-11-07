import { connect } from 'react-redux';
import * as l from '../../actions/list';
import List from '.';

const mapStateToProps = state => {
	const {
		list
	} = state;

	return {
		list
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllItems: category => {
			dispatch(l.getAll(category));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
