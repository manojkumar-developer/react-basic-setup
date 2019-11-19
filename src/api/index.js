import axios from 'axios';
//import { store } from './';
import qs from "qs";
//import { logoutUnathorizedUser } from './modules/auth/actions';

//import { API_URL } from './urls';
const API_URL="";

const request = ({
  method,
  url,
  token = null,
  data = {},
  params = {}
}) => {

  let baseOptions = {
    headers: {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
  }
}

  if (token) {
    baseOptions = {
      headers: {
        //'Authorization': `Token ${token}`
        'Access-Control-Allow-Origin': '*'
      },
      timeout: 30000
    }
  }

  const errorWrapper = (jxr) => {
    const status = jxr.response && jxr.response.status;

    if (status === 401) {
      //return store.dispatch(logoutUnathorizedUser());
    }

    if (status === 500) {
      return Promise.reject('Something went wrong.');
    }

    return Promise.reject(jxr);
  }

  if (method === 'get') {
    const query = Object.keys(data).length ? `?${qs.stringify(data)}` : '';

    return axios.get(`${API_URL}${url}${query}`, baseOptions,params).then(
      (response) => (response),
      (err) => errorWrapper(err)
    );

  }

  if (method === 'delete') {
    return axios.delete(`${API_URL}${url}`, baseOptions).then(
      (response) => response,
      (err) => errorWrapper(err)
    );
  }

  return axios[method](`${API_URL}${url}`, data, baseOptions).then(
    (response) => response,
    (err) => errorWrapper(err)
  );
}

export default request;