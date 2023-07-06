// api.js

import axios from 'axios';

// 创建 Axios 实例
const api = axios.create({
  baseURL: process.env.VUE_APP_serve, // 设置基本请求 URL
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器
api.interceptors.request.use(
  function (config) {
    // 可在请求发送前对请求进行处理，例如添加请求头信息
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  function (response) {
    // 可在收到响应后进行处理，例如解析数据、统一错误处理等
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
