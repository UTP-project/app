import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {Icon} from 'react-native-elements';

type Props = {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  onCancel: (event: GestureResponderEvent) => void;
};

const Chip: React.FC<Props> = ({title, color, style, onCancel}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={{color}}>{title}</Text>
      <Icon
        containerStyle={styles.icon}
        name="cancel"
        color={color}
        size={32}
        onPress={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingLeft: 8,
    borderRadius: 100,
  },
  icon: {
    marginLeft: 6,
  },
});

export default Chip;
