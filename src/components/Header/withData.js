import { connect } from 'react-redux';
import * as l from '../../actions/list';
import Header from '.';

const mapStateToProps = state => {
	const {
		list: { search }
	} = state;

	return {
		searchValue: search
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchItem: item => {
			dispatch(l.searchItem(item))
		},
		selectCategory: category => {
			dispatch(l.selectCategory(category));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
