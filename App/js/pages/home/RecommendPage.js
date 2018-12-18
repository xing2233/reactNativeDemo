import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
import { Icon ,Avatar} from 'react-native-elements'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:150}}>
        {/*轮播图*/}
        <Swiper autoplay={true} showsPagination={false}>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('../../../resource/images/banner_1.jpg')}/>
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../../../resource/images/banner_2.jpg')}/>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('../../../resource/images/banner_3.jpg')}/>
          </View>
        </Swiper>
        {/*轮播图*/}
        </View>
        <View style={{flexDirection:'row'}}>
          <View >
            <Avatar
              medium
              rounded
              title="MT"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Text>111</Text>
          </View>
          <View >
            <Avatar
              medium
              rounded
              title="MT"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width, // 宽度自适应
    flex:1 // 这个可以不要
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});