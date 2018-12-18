/**
 * 初始化页面
 */
import React from 'react'
import {StackNavigator, TabNavigator,TabBarBottom} from "react-navigation";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import {
  Image,
  View,
  StyleSheet
} from "react-native";
import InteractionPage from "./InteractionPage";
import OnlinePage from "./OnlinePage";
import MyPage from "./MyPage";
import Badge from "react-native-tab-navigator/Badge";
import SearchPage from './home/SearchPage';
import LoginPage from './LoginPage';
import CssConfig from '../config/CssConfig';



const Me = StackNavigator({
  LoginPage:{
    screen:LoginPage,
    navigationOptions: ({navigation}) => ({
      title: '我的',
      headerTitleStyle:{
        color:CssConfig.mainBackgroundColor
      },
      headerStyle:{
        backgroundColor:CssConfig.main
      }

    })
  }
});

// tab 导航
const TabNavigatorDemo = TabNavigator(
  {
    MusicWarehouse: {
      screen: HomePage,
      navigationOptions: {
        title: '乐库',
      }
    },
    Interaction: {
      screen: InteractionPage,
      navigationOptions: {
        title: '互动',
      }
    },
    Online: {
      screen: OnlinePage,
      navigationOptions: {
        title: '直播',
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        title: '我的',
      }
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'MusicWarehouse') {
          return (<Image
            source={require('../../resource/images/ic_home_white_headset_60.png')}
            style={[{width: 24, height: 24}, {tintColor: tintColor}]}
          />)
        } else if (routeName === 'Interaction') {
          return (
            <View style={{width: 24, height: 24}}>
              <Badge children={11111} style={{position: 'absolute', left: 15, marginTop: -5}}/>
              <Image
                source={require('../../resource/images/ic_home_white_interaction_60.png')}
                style={[{width: 24, height: 24}, {tintColor: tintColor}]}
              /></View>)
        } else if (routeName === 'Online') {
          return (
            <View style={{width: 24, height: 24}}>
              <Badge children={3} style={{zIndex: 3,backgroundColor: 'red',position: 'absolute', left: 20, marginTop: -5}}/>
              <Image
                source={require('../../resource/images/ic_home_white_online_60.png')}
                style={[{width: 24, height: 24}, {tintColor: tintColor}]}
              /></View>)
        } else if (routeName === 'Me') {
          return (<Image
            source={require('../../resource/images/ic_home_white_me_60.png')}
            style={[{width: 24, height: 24}, {tintColor: tintColor}]}
          />)
        }
      },
    }),
    // two type component
    tabBarComponent: TabBarBottom,

    tabBarPosition: 'bottom',
    // no idea
    // initialLayout: {
    //   height:0,
    //   width: 22,
    // },
    tabBarOptions: {
      // 设置tab选中颜色
      activeTintColor: '#28beb4',
      // 未选中颜色
      inactiveTintColor: 'gray',
      // android
      showIcon:true,
      // android
      style:{
        backgroundColor:'#fff'
      }
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

// top 导航
const Setup = StackNavigator({
  Welcome: {
    screen: WelcomePage,
    navigationOptions: ({navigation}) => ({
      title: '欢迎页面'
    })
  },
  Home: {
    // screen: MainPage,
    screen: TabNavigatorDemo,
    navigationOptions: {
      // 不显示头
      header: null,
      // 字体颜色
      // headerTintColor: '#28beb4',
      // headerStyle:{
      //   backgroundColor: '#28beb4'
      // }
    }
  },
  SearchPage:{
    screen: SearchPage,
    navigationOptions:{
      header: null
    }
  },
  Login:{
    screen:LoginPage,
    navigationOptions: ({navigation}) => ({
      title: 'hello'
    })
  }
});


const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    left: 20,
    // backgroundColor:"red",
    // color:"#ffffff",
    // borderRadius:7,
    width: 15,
    height: 15,
    // overflow: 'hidden',
    // zIndex: 3
    fontSize: 10,
    color: '#fff',
    backgroundColor: 'rgb(0, 122, 255)',
    lineHeight: 15,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#fefefe',
    borderRadius: 17 / 2,
    overflow: 'hidden',
  }
});

export default Setup;
