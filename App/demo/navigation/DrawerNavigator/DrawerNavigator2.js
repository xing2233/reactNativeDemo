import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
export default class DrawerNavigator2 extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }
  render() {
    return (
      <View>
        <Text>  </Text>
        <Button title="this is drawer" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({});