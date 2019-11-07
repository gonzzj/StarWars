import { combineReducers } from 'redux';
import List from './list';

const stores = {
    list: List
};

export default combineReducers(stores);
