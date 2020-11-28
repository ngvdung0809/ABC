import axios from 'axios';
import authApiMap from './apiMap';

// const BASE_URL = 'https://backend-api.happiness-book.jp';
const BASE_URL = 'http://27.72.88.246:8311';
const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

const config = (method, url, data, header) => {
  const obj = {
    method,
    url,
  };
  if (data) {
    if (method === 'get') {
      obj.params = data;
    } else {
      obj.data = data;
    }
  }
  if (header) {
    obj.headers = header;
  }
  return obj;
};

const apiMap = { ...authApiMap(config) };

const api = async (apiName, apiParams) => {
  const configApi = apiMap[apiName](apiParams);
  try {
    const { data } = await request(configApi);
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      data: error.response ? error : { response: { data: { message: 'Lost connection or server was disrupt.Please checkout your wifi/3g or contact to admin!' } } },
    };
  }
};

export default api;
