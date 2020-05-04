import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CreateJourneyParamList} from '.';
import {Icon, Button} from 'react-native-elements';

type PickInfoNavigationProp = StackNavigationProp<
  CreateJourneyParamList,
  'Viewpoint'
>;

type Props = {
  navigation: PickInfoNavigationProp;
};

const PickViewpoint = ({navigation}: Props) => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Icon
            name="arrow-back"
            color="#fff"
            size={28}
            containerStyle={styles.icon}
            onPress={() => {
              navigation.navigate('City');
            }}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.centerText}>选择景点</Text>
        </View>
        <Button
          title="下一步"
          type="clear"
          titleStyle={styles.rightText}
          disabledTitleStyle={styles.disabledStyle}
          onPress={() => {
            navigation.navigate('Result');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 64,
    backgroundColor: '#4DB6AC',
  },
  icon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 1,
    marginLeft: 32,
  },
  headerRight: {
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  centerText: {
    color: '#fff',
    fontSize: 20,
  },
  rightText: {
    color: '#fff',
  },
  disabledStyle: {
    color: '#cfcfcf',
  },
});

export default PickViewpoint;
