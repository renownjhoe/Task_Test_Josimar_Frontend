// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'react-redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { notificationReducer } from './reducers/notificationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
