import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Alert
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from '../common/ScrollableTabBar';
import RecommendPage from './home/RecommendPage';
// import { Button,SearchBar } from 'antd-mobile-rn';
// import { SearchBar } from 'react-native-elements'


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '叶洛洛'
    }
  }

  onChange = (value: any) => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view2} >


        </View>
          {/*<SearchBar*/}
          {/*value={this.state.value}*/}
          {/*placeholder="搜索"*/}
          {/*onSubmit={(value: any) => Alert.alert(value)}*/}
          {/*onCancel={this.clear}*/}
          {/*onChangeText={this.onChange}*/}
          {/*showCancelButton*/}
          {/*cancelText={'取消'}*/}
          {/*/>*/}
        <View style={[styles.container]}>
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#e7e7e7',
    height: 3,
    width: 24,
    marginBottom: 2,
    borderRadius: 2
  },
  view2: {
    backgroundColor: '#28beb4',
    height: 50,
  },
  ScrollableTabBar: {
    paddingLeft: 50,
    paddingRight: 150
  }
});