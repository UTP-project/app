import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  GestureResponderEvent,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export type TouchableWrapperProp = {
  containerStyle?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  rippleColor?: string;
  borderless?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

const TouchableWrapper = ({
  containerStyle,
  rippleColor,
  borderless,
  onPress,
  children,
}: TouchableWrapperProp) => {
  const viewStyle = StyleSheet.flatten([styles.container, containerStyle]);

  return (
    <View style={viewStyle}>
      <TouchableNativeFeedback
        style={styles.touchable}
        background={TouchableNativeFeedback.Ripple(rippleColor, borderless)}
        onPress={onPress}
        useForeground={true}>
        {children}
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TouchableWrapper;
