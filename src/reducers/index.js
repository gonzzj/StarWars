import { combineReducers } from 'redux';
import Movies from './movies';
import Characters from './characters';
import Header from './header';

const stores = {
    characters: Characters,
    movies: Movies,
    header: Header
};

export default combineReducers(stores);
