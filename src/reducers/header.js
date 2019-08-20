const intialState = {};

export default (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SEARCH_ITEM':
			return {
				...state,
				search: payload
			}
            
		default:
			return state;
	}
};