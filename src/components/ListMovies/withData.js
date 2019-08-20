import { connect } from 'react-redux';
import * as m from '../../actions/movies';
import ListMovies from '.';

const mapStateToProps = state => {
	const {
		movies: { list, selectedMovie, searchedList }
	} = state;

	return {
		items: list,
		searchedItems: searchedList,
		selectedItem: selectedMovie
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllMovies: () => {
			dispatch(m.getAll());
		},
		selectMovie: item => {
			dispatch(m.selectMovie(item))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListMovies);
