import { connect } from 'react-redux';
import * as l from '../../actions/list';
import CategoriesList from '.';

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
		selectItem: item => {
			dispatch(l.selectItem(item));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoriesList);
