import { connect } from 'react-redux';
import * as h from '../../actions/header';
import Header from '.';

const mapStateToProps = state => {
	const {
		header: { search }
	} = state;

	return {
		searchValue: search
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchItem: item => {
			dispatch(h.searchItem(item))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
