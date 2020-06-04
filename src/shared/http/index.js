import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
  headers: {}
});

const authorization = JSON.parse(localStorage.getItem('authorization'));
axios.defaults.headers.common.Authorization = authorization;

const http = {
  get(url, params, cancel) {
    return instance({
      method: 'get',
      url,
      params,
      cancelToken: cancel ? cancel.token : null
    });
  },
  post(url, params, cancel) {
    return instance({
      method: 'post',
      url,
      data: params,
      cancelToken: cancel ? cancel.token : null
    });
  },
  delete(url, params, cancel) {
    return instance({
      method: 'delete',
      url,
      data: params,
      cancelToken: cancel ? cancel.token : null
    });
  },
  put(url, params, cancel) {
    return instance({
      method: 'put',
      url,
      data: params,
      cancelToken: cancel ? cancel.token : null
    });
  }
};

export default http;
