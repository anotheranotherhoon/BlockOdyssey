import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  baseURL : 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  }
});