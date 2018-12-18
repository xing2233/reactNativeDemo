import {DrawerNavigator} from "react-navigation";
import {Image} from "react-native";
import React from "react";
import DrawerNavigator1 from './DrawerNavigator1';
import DrawerNavigator2 from './DrawerNavigator2';

const DrawerNavigatorDemo = DrawerNavigator(
  {
    DrawerNavigatorView: {
      screen: DrawerNavigator1,
      navigationOptions: {
        drawerLabel: 'tab1',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../resource/images/ic_home_white_headset_60.png')}
            style={[{width:24,height:24}, {tintColor: tintColor}]}
          />
        ),
      },


    },
    DrawerNavigatorView1: {
      screen: DrawerNavigator2,
      navigationOptions: {
        drawerLabel: 'tab2',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../resource/images/ic_home_white_headset_60.png')}
            style={[{width:24,height:24}, {tintColor: tintColor}]}
          />
        ),
      },


    },
    // contentComponent: (props) => (
    //   <ScrollView>
    //     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    //       <DrawerItems {...props} />
    //     </SafeAreaView>
    //   </ScrollView>
    // )
  },
  {
    initialRouteName:'DrawerNavigatorView',
    // 位置 default 'left' 'right'
    drawerPosition: 'left',
    // 宽度
    // drawerWidth:200
  }
);

export default DrawerNavigatorDemo;