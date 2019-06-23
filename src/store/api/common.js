import { create } from 'apisauce';

const API = create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json'
  },
  timeout: 30000
});

export { API };
