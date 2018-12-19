'use strict';
import axios from 'axios';
import {
  AsyncStorage
} from 'react-native';
import HttpConfig from '../config/HttpConfig';
import AsyncStorageConfig from '../config/AsyncStorageConfig';
import MessageConfig from "../config/MessageConfig";

export default class BaseModel {

  static async Axios(
    method: string = 'get',
    url: string,
    params: Object,
    headers: Object
  ) {

    let baseHeaders = await AsyncStorage.getItem(AsyncStorageConfig.USER_INFO);
    if (baseHeaders) {
      baseHeaders = JSON.parse(baseHeaders)
    } else {
      baseHeaders = {};
    }
    return await axios({
      method: method,
      baseURL: HttpConfig.host,
      url: url,
      params: params ? params : {},
      headers: Object.assign(baseHeaders, HttpConfig.headers, headers),
    }).then(function (response) {
      if (response.status === 200){
        if (response.data){
          if (response.data.code === 0 || response.data.success===true){
            return response.data;
          }
        }
      }
      return {
        code:-1,
        message: MessageConfig['10001']
      };
    }).catch(function (error) {
      console.log(error);
    });
  }
}