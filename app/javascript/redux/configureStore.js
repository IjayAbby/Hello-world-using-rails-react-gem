import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import messageReducer from './message/message';

const reducer = combineReducers({
messageReducer
});

const store = createStore(
reducer,
applyMiddleware(thunk, logger),
);

export default store; 