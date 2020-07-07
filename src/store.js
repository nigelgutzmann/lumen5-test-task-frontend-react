import {combineReducers, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {todos, categoryFilter} from './reducers';

const reducer = combineReducers({
    todos, categoryFilter
});
export const store = createStore(reducer, composeWithDevTools());
