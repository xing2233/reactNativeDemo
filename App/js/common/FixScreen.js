import React from 'react';
import {
  PixelRatio,
  Dimensions,
  Platform
} from 'react-native';

export default class FixScreen {

  constructor(){

  }

  static iosSelect() {
    let screenW = Dimensions.get('window').width;
    let screenH = Dimensions.get('window').height;
    let x_width = 375;
    let x_height = 812;
    return (
      Platform.OS === 'ios' &&
      ((screenH === x_height && screenW === x_width) ||
        (screenH === x_width && screenW === x_height))
    )

  }


  static fixTop(){
    if (Platform.OS === 'ios') {
      if (this.iosSelect()) {
        return 44;
      } else {
        return 22;
      }
    } else {

    }

  }

  static fixKeyboard(type='search'){
    switch (type) {
      case 'search':
        if (this.iosSelect()){
          return 'web-search';
        }
        return 'default';
      case 'number':
        return 'numeric';
      case 'email':
        return 'email-address';
    }

  }

}