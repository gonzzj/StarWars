export const setCharacters = data => {
	return {
		type: 'SET_CHARACTERS',
		payload: data
	};
};

export const selectCharacter = data => {
	return {
		type: 'SELECT_CHARACTER',
		payload: data
	}
};

export const getAll = () => {
	return async dispatch => {
        const endPoint = process.env.REACT_APP_SWAPI_CHARACTERS;
        const res = await fetch(endPoint);

		if (res.status === 200) {
			const data = await res.json();
			return dispatch(setCharacters(data.results));
		}
	};
};
