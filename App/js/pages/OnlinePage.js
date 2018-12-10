import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
export default class OnlinePage extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }
  render() {
    return (
      <View>
        <Text> OnlinePage </Text>
        <Button title="go to two" onPress={() => this.props.navigation.navigate('Profile')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({});