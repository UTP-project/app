import React from 'react';
import TouchableWrapper, {TouchableWrapperProp} from './TouchableWrapper';

type RoundTouchableWrapperProp = {
  size?: number;
  backgroundColor?: string;
} & TouchableWrapperProp;

const RoundTouchableWrapper = ({
  size,
  backgroundColor,
  onPress,
  children,
  rippleColor,
  borderless,
}: RoundTouchableWrapperProp) => {
  return (
    <TouchableWrapper
      containerStyle={{
        width: size || 20,
        height: size || 20,
        borderRadius: (size || 20) / 2,
        backgroundColor: backgroundColor || 'inherit',
      }}
      rippleColor={rippleColor}
      borderless={borderless}
      onPress={onPress}>
      {children}
    </TouchableWrapper>
  );
};

export default RoundTouchableWrapper;
