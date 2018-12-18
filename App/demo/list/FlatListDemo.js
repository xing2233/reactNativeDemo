import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View, Button,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native'

export default class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArray: ['上海', '广州', '北京', '深圳', '济南', '拉萨', '青海', '西安']
    }
  }

  loadData(top=false) {
    if (top) {
      this.setState({
        isLoading: true
      });
    }
    setTimeout(() => {
      let dataArray = [];
      if (top) {
        for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i]);
        }
      } else {
        dataArray = this.state.dataArray.concat(this.state.dataArray);
      }
      this.setState({
        refreshing: false,
        dataArray: dataArray
      })
    }, 2000);
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataArray}
          renderItem={({item}) =>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          }
          // 下拉刷新
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={'red'}
              tintColor={'orange'}
              colors={['red']}
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.loadData(true);
              }
              }
            />
          }
          // 上拉刷新
          ListFooterComponent={
            <View style={{alignItems: 'center'}}>
              <ActivityIndicator
                style={{marginBottom: 5}}
                size={'large'}
                animating={true}
                color={'red'}
              />
              <Text>Loading more</Text>
            </View>
          }
          onEndReached={() => {
            this.loadData();
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  item: {
    backgroundColor: '#169',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});