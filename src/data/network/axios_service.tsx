import axios from 'axios';
import {ApiUrls} from './api_urls';

const AxiosService = {
  async getServiceData(url: string, params: any={}) {
    let requestHeader = {
      'Content-Type': 'application/json',
    };
    return axios.get(`${ApiUrls.BASE_URL}${url}`, {
      params: params,
      headers: requestHeader,
    });
  },

  async postServiceData(url: string, body: any) {
    let requestHeader = {
      'Content-Type': 'application/json',
    };
    return axios.post(`${ApiUrls.BASE_URL}${url}`, body, {
      headers: requestHeader,
    });
  },

  async putServiceData(url: string, body: any) {
    let requestHeader = {
      'Content-Type': 'application/json',
    };
    return axios.put(`${ApiUrls.BASE_URL}${url}`, body, {
      headers: requestHeader,
    });
  },

  async deleteServiceData(url: string, body: any) {
    let requestHeader = {
      'Content-Type': 'application/json',
    };
    return axios.delete(`${ApiUrls.BASE_URL}${url}`, {
      data: body,
      headers: requestHeader,
    });
  },
};

export default AxiosService;
