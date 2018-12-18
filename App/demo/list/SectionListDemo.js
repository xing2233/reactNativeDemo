import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  RefreshControl,
  ActivityIndicator, FlatList
} from 'react-native'

export default class SectionListDemo extends Component {
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
        <SectionList
          renderItem={({item, index, section}) =>
            <View style={styles.item}>
              <Text key={index}>{item}</Text>
            </View>
          }
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.title}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
            </View>
          )}
          sections={[
            {title: '原创', data: ['item1', 'item2']},
            {title: '翻唱', data: ['item3', 'item4']},
            {title: '伴奏', data: ['item5', 'item6']},
            {title: '歌单', data: ['item7', 'item8']},
            {title: '专辑', data: ['item9', 'item10']},
            {title: '视频', data: ['item11', 'item12']},
          ]}
          keyExtractor={(item, index) => item + index}

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
    height: 50,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    // marginTop: 20,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  }
});