// src/services/authService.js
import axios from 'axios';
import api from '../utils/api'; // Import the custom Axios instance

const API_URL = process.env.REACT_APP_BASE_URL; // Access the environment variable

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  const { token } = response.data; // Assuming the token is returned in the response
  // Store the token in local storage
  localStorage.setItem('token', token);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  const { token } = response.data; // Assuming the token is returned in the response

  // Store the token in local storage
  localStorage.setItem('token', token);

  return response.data;
};

export const fetchUser = async () => {
  const response = await api.get('/user'); // Use the api instance
  return response.data;
};

export const resendVerification = async () => {
  const response = await api.post(`${API_URL}/email/resend`);
  return response.data;
};