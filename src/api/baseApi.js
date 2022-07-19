import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5555/',
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('🚀 ~ file: baseApi.js ~ line 9 ~ response', response);
    return response.data;
  },
  (error) => {
    const { response } = error;
    console.log('🚀 ~ file: baseApi.js ~ line 13 ~ response', response);
    return Promise.reject(response);
  }
);
export { axiosInstance };
