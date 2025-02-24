// src/reducers/authReducer.js
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from '../actions/authActions';
  
  const initialState = {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case REGISTER_SUCCESS:
        return { ...state, loading: false };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, token: action.payload.token };
      case REGISTER_FAIL:
      case LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  