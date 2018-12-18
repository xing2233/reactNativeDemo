import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
  SwipeableFlatList,
  TouchableHighlight
} from 'react-native'

export default class SwipeableFlatListDemo extends Component {
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

  getQuickActions(){
    return <View style={styles.quickAContent}>
      <TouchableHighlight
        onPress={()=>alert("确认删除？")}
      >
        <View style={styles.unFocus}>
          <Text style={styles.delete}>取消关注</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={()=>alert("确认删除？")}
      >
        <View style={styles.quick}>
          <Text style={styles.delete}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  };


  render() {
    return (
      <View>
        <SwipeableFlatList
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

          // 创建侧滑菜单
          renderQuickActions={()=>this.getQuickActions()}
          bounceFirstRowOnMount={false}
          // 可展开（滑动）的距离,必须要该参数
          maxSwipeDistance={200}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#aeffb1',
    height: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,//漂浮的效果
    borderRadius:5,//圆角
  },
  text: {
    color: '#444444',
    fontSize: 20,
  },
  //侧滑菜单的样式
  quickAContent:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:15,
    marginBottom:10,
    alignItems: 'center'
  },
  quick:{
    backgroundColor:"#ff1d49",
    flex:1,
    alignItems:'flex-end',//水平靠右
    justifyContent:'center',//上下居中
    width:100,
    borderRadius:5,
    elevation:5,//漂浮的效果

  },
  delete:{
    color:"#d8fffa",
    marginRight:30
  },
  unFocus:{
    backgroundColor:"#ccc",
    flex:1,
    alignItems:'flex-end',//水平靠右
    justifyContent:'center',//上下居中
    width:100,
    borderRadius:5,
    elevation:5,//漂浮的效果

  }
});
