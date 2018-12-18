import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
export default class DrawerNavigator1 extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }
  render() {
    return (
      <View>
        <Text>  </Text>
        <Button title="this is drawer" onPress={() => this.props.navigation.navigate('DrawerToggle')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({});