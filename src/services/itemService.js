// src/services/itemService.js

import api from '../utils/api'; // Import the custom Axios instance

export const getItems = async () => {
  const response = await api.get('/brts'); // Use the api instance
  return response.data;
};

export const createItem = async (itemData) => {
  const response = await api.post('/brts', itemData); // Use the api instance
  return response.data;
};

export const updateItem = async (id, itemData) => {
  const response = await api.put(`/brts/${id}`, itemData); // Use the api instance
  return response.data;
};

export const deleteItem = async (id) => {
  await api.delete(`/brts/${id}`); // Use the api instance
};