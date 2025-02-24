// src/reducers/notificationReducer.js
import { ADD_NOTIFICATION } from '../actions/notificationActions';

const initialState = {
  notifications: [],
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, notifications: [action.payload, ...state.notifications] };
    default:
      return state;
  }
};
