import { connect } from 'react-redux';
import * as l from '../../actions/list';
import List from '.';

const mapStateToProps = state => {
	const {
		list: { selectedCategory, selectedItem }
	} = state;

	return {
		selectedCategory,
		selectedItem
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
