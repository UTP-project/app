import {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
} from '@react-navigation/stack';

export const dateFormat = (date: Date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};

export const forHorizontal = ({
  current,
  layouts: {screen},
}: StackCardInterpolationProps): StackCardInterpolatedStyle => {
  const slideTransition = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.width, 0],
  });

  return {
    cardStyle: {
      transform: [{translateX: slideTransition}],
    },
  };
};
