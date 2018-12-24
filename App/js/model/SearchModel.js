'use strict';
import BaseModel from './BaseModel';
export default class SearchModel extends BaseModel{
  constructor(){
    super();
  }

  static getHostTags(){
    return super.Axios(
      'get',
      '/go/searchsHotWords'
      ).then((result)=>{
        return result;
    });
  }


  static getQuickSearch(keyword){
    return super.Axios(
      'get',
      '/go/quicksearch',
      {keyword:keyword}
    ).then((result)=>{
      return result;
    });
  }
}