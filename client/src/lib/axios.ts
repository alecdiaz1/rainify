import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const axiosClient = applyCaseMiddleware(axios.create());

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
