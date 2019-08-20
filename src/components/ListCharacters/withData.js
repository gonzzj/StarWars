import { connect } from 'react-redux';
import * as c from '../../actions/characters';
import ListCharacters from '.';

const mapStateToProps = state => {
	const {
		characters: { list, selectedCharacter, searchedList }
	} = state;

	return {
		items: list,
		searchedItems: searchedList,
		selectedItem: selectedCharacter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAllCharacters: () => {
			dispatch(c.getAll());
		},
		selectCharacter: item => {
			dispatch(c.selectCharacter(item));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCharacters);
