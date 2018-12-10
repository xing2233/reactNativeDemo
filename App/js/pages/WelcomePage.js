import React from 'react';
import {
  StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';


export default class WelcomePage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  }

  componentWillUnmount(){
    this.timer&&clearTimeout(this);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>WelcomePage</Text>
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