import { connect } from 'react-redux';
import * as l from '../../actions/list';
import CategoriesList from '.';

const mapStateToProps = state => {
	const {
		list: { searchedItems, selectedCategory }
	} = state;

	return {
		searchedItems,
		items: state.list[selectedCategory]
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
