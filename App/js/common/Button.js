import {Platform, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import React from "react";

const iosButton = (props) => {
  return (<TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>);
};
const androidButton = (props) => {
  return (<TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()}
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>);
};

const Button = Platform.OS === 'ios' ? iosButton : androidButton;

export default Button;