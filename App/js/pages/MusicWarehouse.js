import React, {Component} from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'
import FlatListOfMusicWarehouse from '../home/music_warehouse/FlatListOfMusicWarehouse'
import SwipeableFlatListOfMusicWarehouse from '../home/music_warehouse/SwipeableFlatListOfMusicWarehouse';

export default class MusicWarehouse extends Component {
  // static navigationOptions = {
  //   title: 'Home'
  // }
  render() {
    return (
      <View >
        <SwipeableFlatListOfMusicWarehouse/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});