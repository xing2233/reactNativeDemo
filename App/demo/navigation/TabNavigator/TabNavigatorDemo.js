import {TabNavigator} from "react-navigation";
import {Image} from "react-native";
import React from "react";

const TabNavigatorDemo = TabNavigator(
  {
    MusicWarehouse: {
      screen: MusicWarehouse,
      navigationOptions: {
        title: '乐库',
        // header: null
      }
    },
    Interaction: {
      screen: Interaction,
      navigationOptions: {
        title: '互动',
        // header: null
      }
    },
    Online: {
      screen: Online,
      navigationOptions: {
        title: '直播',
        // header: null
      }
    },
    Me: {
      screen: StackNavigatorOfMe,
      navigationOptions: {
        title: '我的',
        // header: null
      }
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'MusicWarehouse') {
          return <Image
            source={require('./res/images/ic_home_white_headset_60.png')}
            style={[{width: 26, height: 26}, {tintColor: tintColor}]}
          />
        } else if (routeName === 'Interaction') {
          return <Image
            source={require('./res/images/ic_home_white_interaction_60.png')}
            style={[{width: 26, height: 26}, {tintColor: tintColor}]}
          />
        } else if (routeName === 'Online') {
          return <Image
            source={require('./res/images/ic_home_white_online_60.png')}
            style={[{width: 26, height: 26}, {tintColor: tintColor}]}
          />
        } else if (routeName === 'Me') {
          return <Image
            source={require('./res/images/ic_home_white_me_60.png')}
            style={[{width: 26, height: 26}, {tintColor: tintColor}]}
          />
        }
      },
    }),
    // tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      // 设置tab选中颜色
      activeTintColor: '#28beb4',
      // 未选中颜色
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
export default TabNavigatorDemo