import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: { 'Content-Type': 'application/json' }
});

export default api;
