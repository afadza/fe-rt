import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api-rt.onrender.com/api',
});
