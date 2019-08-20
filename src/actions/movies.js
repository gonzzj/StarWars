export const setMovies = data => {
	return {
		type: 'SET_MOVIES',
		payload: data,
	};
};

export const selectMovie = data => {
	return {
		type: 'SELECT_MOVIE',
		payload: data
	}
};

export const getAll = () => {
	return async dispatch => {
        const endPoint = process.env.REACT_APP_SWAPI_MOVIES;
        const res = await fetch(endPoint);

		if (res.status === 200) {
			const data = await res.json();
			return dispatch(setMovies(data.results));
		}
	};
};
