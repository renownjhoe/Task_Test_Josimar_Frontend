// src/actions/notificationActions.js
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});
