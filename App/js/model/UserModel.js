'use strict';
import {
  AsyncStorage,
  Alert
} from "react-native"
import BaseModel from './BaseModel';

export default class UserModel extends BaseModel{
  constructor(){
    super();
  }

  static login(username:string, password:string){
    // super.Axios('/go/searchsHotWords')

    if (username !== 'stkidd' && password!=='test123'){
      return false;
    }

    const user = {
      'sign':'F4DFOWsDoux3QBUxnJj7E/YIrUl9HkM0A5fYF4ynnDcTeUKpGK5v8w==',
      'uid':45517627
    };
    AsyncStorage.setItem('USER_INFO', JSON.stringify(user),(error)=>{
      if (error){
        return false;
      }
    });
    return true;
  }
}