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

type Props = {
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
}: Props) => {
  const viewStyle = StyleSheet.flatten([styles.container, containerStyle]);

  return (
    <View style={viewStyle}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          rippleColor || '#ccc',
          borderless || false
        )}
        onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default TouchableWrapper;
