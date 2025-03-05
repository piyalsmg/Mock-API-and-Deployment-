import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (title: string, body: string) => {
  const response = await axios.post(API_URL, { title, body, userId: 1 });
  return response.data;
};

export const updateItem = async (id: number, title: string, body: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { id, title, body, userId: 1 });
  return response.data;
};

export const deleteItem = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};