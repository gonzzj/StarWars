import { get, map, cloneDeep } from 'lodash';
import * as _ from '../actions/types';

const initialState = {
	selectedCategory: 'films'
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case _.SET_ITEMS:
			const newState = {
				...state
			};

			newState[state.selectedCategory] = fetchItems(payload, state.selectedCategory)

			return newState;
			
		case _.SELECT_ITEM:
			return {
				...state,
				selectedItem: payload
			}

		case _.SEARCH_ITEM:
			const items = state[state.selectedCategory];
			const filteredList = payload !== "" ? items && items.filter(item => item.name.text.toLowerCase().indexOf(payload.toLowerCase()) > -1) : items;

			return {
				...state,
				search: payload,
				searchedItems: filteredList
			}
		
		case _.SELECT_CATEGORY:
			const clonedState = cloneDeep(state);

			delete clonedState['searchedItems'];
			
			return {
				...clonedState,
				selectedCategory: payload,
				selectedItem: {}
			}

		case _.SHOW_LOADING:
			return {
				...state,
				showLoading: payload
			}

		default:
			return state;
	}
};

const fetchItems = (data, category) => {
	return map(data, item => {
		switch (category) {
			case 'films':
				return {
					name: {
						text: get(item, 'title', ''),
						variant: "h4",
						component: "h2"
					},
					director: {
						text: get(item, 'director', ''),
						variant: "subtitle1",
						component: "span"
					},
					producers: {
						text: get(item, 'producer', ''),
						variant: "body2",
						component: "p"
					},
					releaseDate: {
						text: get(item, 'release_date', ''),
						variant: "body2",
						component: "p"
					}
				}
				
			default:
				return {
					name: {
						text: get(item, 'name', ''),
						variant: "h4",
						component: "h2"
					},
					eyeColor: {
						text: get(item, 'eye_color', ''),
						variant: "subtitle1",
						component: "span"
					},
					height: {
						text: get(item, 'height', ''),
						variant: "body2",
						component: "p"
					},
					weight: {
						text: get(item, 'weight', ''),
						variant: "body2",
						component: "p"
					}
				}
		}
	});
};