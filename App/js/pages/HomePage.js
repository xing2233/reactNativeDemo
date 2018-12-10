import React from 'react';
import {
  StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from '../common/ScrollableTabBar';


export default class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        {/*<View style={styles.view2} >*/}

        {/*</View>*/}
        <ScrollableTabView
          tabBarBackgroundColor={'#28beb4'}
          tabBarActiveTextColor={'#ffffff'}
          tabBarInactiveTextColor={'mintcream'}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          renderTabBar={()=><ScrollableTabBar />}
        >

          <Text tabLabel={'LOOK直播'}></Text>
          <Text tabLabel="首页推荐" />
          <Text tabLabel="粉丝圈子" />
          <Text tabLabel="圈子" />
          <Text tabLabel="MV" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarUnderlineStyle:{
    backgroundColor: '#e7e7e7',
    height: 3,
    width: 24,
    marginBottom: 2,
    borderRadius:2
  },
  view2:{
    backgroundColor: '#28beb4',
    height: 50,
  },
  ScrollableTabBar:{
    paddingLeft: 50,
    paddingRight: 50
  }
});