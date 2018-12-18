'use strict';
import BaseModel from './BaseModel';
export default class UserModel extends BaseModel{
  constructor(){
    super();
  }

  static get(){
    super.Axios('/go/searchsHotWords')
  }
}