import React from 'react';
import {
  StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import DrawerNavigatorDemo from './DrawerNavigator/DrawerNavigatorDemo'
import TabNavigatorDemo from './TabNavigator/TabNavigatorDemo'
import StackNavigatorDemo from './StackNavigator/StackNavigatorDemo'


export default class NavigatorDemo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={()=>this.props.navigation.navigate('DrawerNavigatorDemo')}
        >
          <View>
            <Text>侧边导航DrawerNavigator</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('TabNavigatorDemo')}
          >
            <View>
              <Text>TabNavigator</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('StackNavigatorDemo')}
          >
            <View>
              <Text>StackNavigator</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});