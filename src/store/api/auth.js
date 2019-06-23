import { API } from './common';

export const login = (username, password) =>
  API.post('/auth/login', { username, password });
