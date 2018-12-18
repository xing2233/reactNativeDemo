'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Keyboard,
  Platform,
  Text,
  TouchableWithoutFeedback,
  DeviceEventEmitter
} from 'react-native';

import {SearchBar, Button} from 'react-native-elements';
import FixScreen from '../../../common/FixScreen';
import CssConfig from '../../../config/CssConfig';

export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    //注意addListener的key和emit的key保持一致
    this.msgListener = DeviceEventEmitter.addListener('searchHotTag', (msg) => {
      switch (msg.type) {
        case 'search':
          this.setState({
            value:msg.value,
          });

          break;
        default:
          this.setState({
            value:msg.value,
          });
          break;
      }
    });
  }

  componentWillUnmount() {
    this.msgListener&&this.msgListener.remove();
  }

  onChange = (value: any, search: number) => {
    this.setState({
      value: value
    });
    if (search === true) {
      this.onSubmit(value);
    }
  };

  clear = (props) => {
    this.setState({value: ''});
  };

  onSubmit = (value: any) => {
    Alert.alert(value);
  };

  onCancel() {
    // hide keyboard
    Keyboard.dismiss();
    this.props.navigation.goBack();
  }


  render() {
    return (
      <View style={styles.searchBarBox}>

        <SearchBar
          defaultValue={this.state.value}
          containerStyle={styles.searchBarContainerStyle}
          inputStyle={styles.searchBarInputStyle}
          lightTheme={true}
          onChangeText={this.onChange}
          onClearText={this.clear}
          clearIcon
          placeholder='搜索歌曲/音乐人/歌单'
          // 回车或者点击键盘go确定触发
          onSubmitEditing={() => this.onSubmit()}
          keyboardType={FixScreen.fixKeyboard('search')}
          autoFocus={true}

          returnKeyType={'search'}
          // android 专有 自定义键盘文字
          returnKeyLabel={'搜索'}
          // android 专有 隐藏android输入框下划线
          underlineColorAndroid={'transparent'}
          style={{padding: 0}}
          // ios 专有
          enablesReturnKeyAutomatically={true}
        />

        <Button
          title='取消'
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
          containerViewStyle={styles.buttonContainerViewStyle}
          onPress={() => this.onCancel()}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CssConfig.mainBackgroundColor,
    paddingTop: FixScreen.fixTop(),
  },
  searchBarBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  searchBarContainerStyle: {
    backgroundColor: CssConfig.mainBackgroundColor,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 7
  },
  searchBarInputStyle: {
    backgroundColor: CssConfig.mainBackgroundColor,
    borderWidth: 1,
    borderColor: CssConfig.mainBorderColor,
    fontSize: 14,
    color: "#000"
  },
  searchBarUnderlineColorAndroid: {
    color: CssConfig.mainBackgroundColor
  },
  buttonTextStyle: {
    fontSize: 14,
    color: CssConfig.main
  },
  buttonStyle: {
    backgroundColor: CssConfig.mainBackgroundColor,
    height: Platform.OS === 'ios' ? 30 : 40,
    padding: 0,
    margin: 8,
    marginLeft: 0

  },
  buttonContainerViewStyle: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0
  }

});