import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  GestureResponderEvent,
  TouchableNativeFeedback,
} from 'react-native';

export type TouchableWrapperProp = {
  containerStyle?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  rippleColor?: string;
  borderless?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

const TouchableWrapper = ({
  containerStyle,
  rippleColor = 'rgbs(0, 0, 0, 0.8)',
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
