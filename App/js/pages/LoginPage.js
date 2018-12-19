import React from 'react';
import {
  StyleSheet,
  Text, TouchableHighlight,
  View,
  TextInput,
  Alert,

} from 'react-native';
import CssConfig from "../config/CssConfig";
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../common/Button';
import UserModel from '../model/UserModel';
import MessageConfig from '../config/MessageConfig';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      checked: true
    }
  }

  onChangeUsername(text: string) {
    this.setState({
      username: text
    });
  }

  onChangePassword(text: string) {
    this.setState({
      password: text
    });
  }

  onClear(name:string){
    switch (name) {
      case 'username':
        this.setState({
          username: ''
        });
        break;
      case 'password':
        this.setState({
          password: ''
        });
        break;
    }
  }

  onLogin(){
    if (!UserModel.login(this.state.username, this.state.password)){
      Alert.alert(MessageConfig['10000']);
    }
  }


  render() {

    const loginButtonBackgroundColor = !this.state.username || !this.state.password ? CssConfig.mainBorderColor : CssConfig.main;


    console.log(111);
    return (
      <View style={styles.container}>
        <View style={styles.loginTextInputBox}>
          <View style={styles.inputBox}>
            <TextInput
              value={this.state.username}
              placeholder={'邮箱/手机号/通行证登录'}
              style={styles.searchBarInputStyle}
              underlineColorAndroid='transparent'
              onChangeText={(Text) => this.onChangeUsername(Text)}
              autoCapitalize='none'
              // ref={input => {
              //   this.usernameClear = input
              // }}
            />

            <View style={{justifyContent: 'center', paddingTop: 5}}>
              {this.state.username ?
                <Icon
                  onPress={() => this.onClear('username')}
                  name='ios-close'
                  size={25}
                  color={CssConfig.mainTextColor}
                /> : null
              }
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={this.state.password}
              placeholder={'密码'}
              style={styles.searchBarInputStyle}
              underlineColorAndroid='transparent'
              onChangeText={(Text) => this.onChangePassword(Text)}
              // ref={input => {
              //   this.passwordClear = input
              // }}
              secureTextEntry={true}
              autoCapitalize='none'
            />

            <View style={{justifyContent: 'center', paddingTop: 5}}>
              {this.state.password ?
                <Icon
                  // onPress={() => this.passwordClear.clear()}
                  onPress={() => this.onClear('password')}
                  name='ios-close'
                  size={25}
                  color={CssConfig.mainTextColor}
                /> : null
              }
            </View>
          </View>
          <View style={styles.loginTextBox}>
            <Text>找回密码</Text>
            <Text>注册账户</Text>
          </View>
          <View>

          </View>
          <Button
            disabled={this.state.username && this.state.password ? false : true}
            onPress={() => this.onLogin()}
          >
            <View style={[styles.loginButtonBox, {backgroundColor:loginButtonBackgroundColor}]}>
              <Text style={styles.loginButtonText}>登录</Text>
            </View>
          </Button>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CssConfig.mainBackgroundColor,
  },
  loginTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loginTextInputBox: {
    flex: 1,
    padding: 40,
    justifyContent: 'center'
  },
  searchBarInputStyle: {
    fontSize: 14,
    height: 50,
    color: "#000",
    flex: 1
  },
  searchBarUnderlineColorAndroid: {
    color: CssConfig.mainBackgroundColor
  },
  inputBox: {
    backgroundColor: CssConfig.mainBackgroundColor,
    borderWidth: 1,
    borderColor: CssConfig.mainBorderColor,
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    paddingRight: 15,
    flexDirection: 'row',
  },
  loginButtonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: CssConfig.mainBackgroundColor,
    fontSize: 16
  }


});