import {StackNavigator} from "react-navigation";
import {Button} from "react-native";
import React from "react";

const StackNavigatorDemo = StackNavigator({
  Me: {
    screen: DrawerNavigatorView,
    navigationOptions: ({navigation}) => ({
      title: '乐库',
      // header: null
      // headerTitle: '点我',
      headerRight: (
        <Button
          onPress={() => alert('this is button')}
          title="right"
          color="red"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('DrawerToggle')}
          title="show Drawer"
          color="red"
        />
      ),
    })
  }
});

export default StackNavigatorDemo;