import axios from 'axios';
import logout from '../store/authentication/actions/logout';

const API = axios.create({
  baseURL: 'http://localhost:8888',
});

export const setInterceptors = (store) => {
  const onRequest = (request) => {
    const authorization = localStorage.getItem('authorization');
  
    if (authorization) {
      request.headers['Authorization'] = authorization;
    }
  
    return request;
  };

  const onResponse = (response)  => {
    const { authorization } =  response.headers;
  
    if (authorization) {
      localStorage.setItem('authorization', authorization);
    }
  
    return response;
  };

  const onResponseError = (error) => {
    if (error.response.status === 401) {
      store.dispatch(logout());
    }

    return error;
  }

  API.interceptors.request.use(onRequest);
  API.interceptors.response.use(onResponse, onResponseError);
}

export default API;