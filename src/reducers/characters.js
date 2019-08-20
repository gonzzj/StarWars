import { get, map } from 'lodash';

const intialState = {};

export default (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				list: fetchCharacters(payload),
			};
			
		case 'SELECT_CHARACTER':
			return {
				...state,
				selectedCharacter: payload
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

export const fetchCharacters = payload => {
	return map(payload, item => {
		return {
			name: get(item, 'name', ''),
			eyes: get(item, 'eye_color', ''),
            height: get(item, 'height', ''),
            weight: get(item, 'mass', ''),
            movies: get(item, 'films', ''),
		};
	});
};
