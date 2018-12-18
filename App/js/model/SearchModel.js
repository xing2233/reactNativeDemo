'use strict';
import BaseModel from './BaseModel';
export default class SearchModel extends BaseModel{
  constructor(){
    super();
  }

  static getHostTags(){
    super.Axios('/go/searchsHotWords')
  }
}