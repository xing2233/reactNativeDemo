'use strict';
import axios from 'axios';
import UrlConfig from '../config/UrlConfig';


export default class BaseModel {

  static Axios(
    method: string = 'get',
    url: string,
    data: Object,
    headers: Object
  ) {
    axios({
      method: method,
      baseURL: UrlConfig.host,
      url: url,
      data: data,
      headers: Object.assign({}, UrlConfig.headers, headers),
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      console.log(error);
    });
  }
}