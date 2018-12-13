'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from '../common/ScrollableTabBar';
import RecommendPage from './home/RecommendPage';
import FixScreen from '../common/FixScreen';
import CssConfig from '../config/CssConfig';


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '叶洛洛'
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          tabBarBackgroundColor={'#28beb4'}
          tabBarActiveTextColor={'#ffffff'}
          tabBarInactiveTextColor={'mintcream'}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          renderTabBar={({props}) => <ScrollableTabBar
            tabsContainerStyle={styles.ScrollableTabBar}
            {...this.props}
          />}
        >

          <RecommendPage tabLabel="推荐"/>
          <Text tabLabel="粉丝圈"/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: FixScreen.fixTop(),
    backgroundColor: CssConfig.main,
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#e7e7e7',
    height: 3,
    width: 24,
    marginBottom: 2,
    borderRadius: 2
  },
  ScrollableTabBar: {
    paddingLeft: 50,
    paddingRight: 150
  }
});