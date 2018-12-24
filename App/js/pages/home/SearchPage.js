'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Keyboard,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {SearchBar, Button} from 'react-native-elements';
import FixScreen from '../../common/FixScreen';
import CssConfig from '../../config/CssConfig';
import SearchHotTagsComponent from './search/SearchHotTagsComponent';
import SearchBarComponent from './search/SearchBarComponent';


export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBarComponent {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CssConfig.mainBackgroundColor,
    paddingTop: FixScreen.fixTop(),
  },
});