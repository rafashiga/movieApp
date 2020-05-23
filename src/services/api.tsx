import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = '577f57de20ce365c5cd67b47e129eddb';
  return config;
});

export default api;
