import axios, { HeadersDefaults } from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: { 'Content-Type': 'application/json' }
});

export function setTokenApi(token: string) {
  (api.defaults.headers as HeadersDefaults).Authorization = `Bearer ${token}`;
  console.log('SETTOKENAPI:', token);
}

export default api;
