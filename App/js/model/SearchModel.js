'use strict';
import BaseModel from './BaseModel';
export default class SearchModel extends BaseModel{
  constructor(){
    super();
  }

  static getHostTags(){
    return super.Axios(
      'get',
      '/go/searchsHotWords',
      {a:1}
      ).then((result)=>{
        return result;
    });
  }
}