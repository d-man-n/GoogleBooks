import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import page from '../../reducers/page';
import books from '../../reducers/books';

const rootReducer = combineReducers({
    page,
    books
  });

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}