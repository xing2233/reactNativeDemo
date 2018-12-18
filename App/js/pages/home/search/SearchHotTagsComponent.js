'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  DeviceEventEmitter
} from 'react-native';

import CssConfig from '../../../config/CssConfig';

export default class SearchHotTagsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hotTags: [
        '沙漠骆驼',
        '盗将行',
        '往后余生',
        '不然',
        '可不可以',
        '光年之外',
        '火花',
        '沙骆驼',
        '沙漠骆驼事实上',

      ]
    }
  }


  render() {
    const list = this.state.hotTags.map((item, index) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => DeviceEventEmitter.emit('searchHotTag', {value:item,type:'search'})}
        >
          <View style={styles.searchHotTagBox}>
            <Text style={styles.searchHotTagText}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return (
      <View style={styles.searchHot}>
        <View>
          <Text style={styles.searchHotHeaderText}>热门搜索</Text>
        </View>
        <View style={styles.searchHotTag}>
          {list}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchHotTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  searchHotTagBox: {
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: CssConfig.mainBorderColor,
  },
  searchHotTagText: {
    color: CssConfig.mainTextColor
  },
  searchHotHeaderText: {
    color: CssConfig.mainTextColor
  },
  searchHot: {
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: CssConfig.mainBorderColor,
    margin: 8,
    marginTop: 30,
    flex: 1,
    height: 60
  }

});