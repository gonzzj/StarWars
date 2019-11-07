import * as _ from "./types";

export const setItems = data => {
	return {
		type: _.SET_ITEMS,
		payload: data
	};
};

export const selectItem = data => {
	return {
		type: _.SELECT_ITEM,
		payload: data
	}
};

export const searchItem = data => {
	return {
		type: _.SEARCH_ITEM,
		payload: data
	};
};

export const selectCategory = data => {
	return {
		type: _.SELECT_CATEGORY,
		payload: data
	}
};

export const showLoading = data => {
	return {
		type: _.SHOW_LOADING,
		payload: data
	}
};

export const getAll = (category) => {
	return async (dispatch, getState) => {
		const { list } = getState();
		

		if (!list[category]) {
			const endPoint = process.env.REACT_APP_SWAPI_SERVICE + category + "/";
			dispatch(showLoading(true))
			const res = await fetch(endPoint);
			
			if (res.status === 200) {
				const data = await res.json();
				dispatch(showLoading(false))
				return dispatch(setItems(data.results));
			}
		}	
	};
};
