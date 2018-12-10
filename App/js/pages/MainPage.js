import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from "./HomePage";
import InteractionPage from "./InteractionPage";
import OnlinePage from "./OnlinePage";
import MyPage from "./MyPage";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '乐库'
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TabNavigator
        >
          <TabNavigator.Item
            selected={this.state.selectedTab === '乐库'}
            title="乐库"
            renderIcon={() => <Image style={styles.image}
                                     source={require('../../resource/images/ic_home_white_headset_60.png')}/>}
            renderSelectedIcon={() => <Image style={styles.image}
                                             source={require('../../resource/images/ic_home_white_headset_60.png')}/>}
            badgeText="1"
            onPress={() => this.setState({selectedTab: '乐库'})}>
            <HomePage/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image style={styles.image}
                                     source={require('../../resource/images/ic_home_white_headset_60.png')}/>}
            renderSelectedIcon={() => <Image style={styles.image}
                                             source={require('../../resource/images/ic_home_white_headset_60.png')}/>}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <View></View>
          </TabNavigator.Item>
        </TabNavigator>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});