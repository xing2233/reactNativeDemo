import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
export default class MyPage extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }
  render() {
    return (
      <View>
        <Text> MyPage </Text>
        <Button title="this is me" onPress={() => this.props.navigation.navigate('DrawerToggle')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({});