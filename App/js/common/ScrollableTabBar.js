import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Dimensions,
  ViewPropTypes,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const iosButton = (props) => {
  return (<TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>);
};
const androidButton = (props) => {
  return (<TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>);
};

const Button = Platform.OS === 'ios' ? iosButton : androidButton;


const WINDOW_WIDTH = Dimensions.get('window').width;

export default class ScrollableTabBar extends Component {
  constructor(props) {
    super(props);
    this._tabsMeasurements = [];
    this.state = {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
    };

    this.onTabContainerLayout = this.onTabContainerLayout.bind(this);
    this.onContainerLayout = this.onContainerLayout.bind(this);
    this.updateView = this.updateView.bind(this);

  }

  static defaultProps = {
    scrollOffset: 52,
    activeTextColor: 'navy',
    inactiveTextColor: 'black',
    backgroundColor: null,
    style: {},
    tabStyle: {},
    tabsContainerStyle: {},
    underlineStyle: {},
  };

  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func,
    left: PropTypes.any,
    leftStyle: ViewPropTypes.style,
    leftTitleStyle: ViewPropTypes.style,
    leftTitle: PropTypes.string,
  };

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  }

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  }

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements;
  }

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false,});
    }

  }

  updateTabUnderline(position, pageOffset, tabCount) {
    let lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      let newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);
      if (this.props.underlineStyle.width) {
        newLineLeft = newLineLeft + (newLineRight - newLineLeft - this.props.underlineStyle.width) / 2;
      }

      this.setState({
        _leftTabUnderline: newLineLeft,
        _widthTabUnderline: newLineRight - newLineLeft,
      });
    } else {

      if (this.props.underlineStyle.width) {
        lineLeft = (lineRight - lineLeft - this.props.underlineStyle.width) / 2 + lineLeft;
      }
      this.setState({
        _leftTabUnderline: lineLeft,
        _widthTabUnderline: lineRight - lineLeft,
      });
    }

  }

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const {activeTextColor, inactiveTextColor, textStyle,} = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (<Button
        key={`${name}_${page}`}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits='button'
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
      >
        <View style={[styles.tab, this.props.tabStyle,]}>
          <Text style={[{color: textColor, fontWeight,}, textStyle,]}>
            {name}
          </Text>
        </View>
      </Button>
    );
  }

  measureTab(page, event) {
    const {x, width, height,} = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {left: x, right: x + width, width, height,};
    this.updateView({value: this.props.scrollValue.__getValue(),});
  }

  left(props) {
    if (this.props.left === false) {
      return null;
    } else if (this.props.left) {
      return React.cloneElement(this.props.left(props), props);
    }
  }

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };
    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    };

    return (<View
        style={[styles.container, {backgroundColor: this.props.backgroundColor,}, this.props.style, {flexDirection: 'row'}]}
        onLayout={this.onContainerLayout}
      >
        <View>
          <Button>
            <View style={{alignItems: 'center', justifyContent: 'center', height: 49, paddingLeft: 20}}>
              <Text style={{color: 'mintcream'}}>5ING</Text>
            </View>
          </Button>
        </View>
        <ScrollView
          ref={(scrollView) => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          bounces={false}
          scrollsToTop={false}
        >
          <View
            style={[styles.tabs, {width: this.state._containerWidth,}, this.props.tabsContainerStyle,]}
            ref={'tabContainer'}
            onLayout={this.onTabContainerLayout}
          >
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              // const renderTab = this.props.renderTab || this.renderTab;
              if (this.props.renderTab) {
                this.props.renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
              } else {
                return this.renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
              }

            })}
            <Animated.View style={[tabUnderlineStyle,
              dynamicTabUnderline,
              this.props.underlineStyle,
            ]}/>
          </View>
        </ScrollView>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('SearchPage')}
          >
            <View style={{alignItems: 'center', justifyContent: 'center', height: 49, paddingRight: 20}}>
              <Icon name={'search'} size={20} color={'mintcream'}/>
            </View>
          </Button>
        </View>
      </View>
    );
  }

  componentWillReceiveProps(nextProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) && this.state._containerWidth) {
      this.setState({_containerWidth: null,});
    }
  }

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({_containerWidth: width,});
    this.updateView({value: this.props.scrollValue.__getValue(),});
  }

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({value: this.props.scrollValue.__getValue(),});
  }


}

const styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

