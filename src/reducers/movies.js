import { get, map } from 'lodash';

const intialState = {};

export default (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_MOVIES':
			return {
				...state,
				list: fetchMovies(payload),
			};
			
		case 'SELECT_MOVIE':
			return {
				...state,
				selectedMovie: payload
			}

		case 'SEARCH_ITEM':
			const filteredList = payload !== "" ? state.list && state.list.filter(item => get(item, 'name', '').toLowerCase().indexOf(payload.toLowerCase()) > -1) : state.list;
			
			return {
				...state,
				searchedList: filteredList
			}
            
		default:
			return state;
	}
};

export const fetchMovies = payload => {
	return map(payload, item => {
		return {
			name: get(item, 'title', ''),
			director: get(item, 'director', ''),
            producers: get(item, 'producer', ''),
            release_date: get(item, 'release_date', '')
		};
	});
};