import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import {CreateJourneyParamList} from '.';
import Picker, {Option} from '../../../components/Picker';

type PickInfoOption = {
  pplNum: Option[];
  pplType: Option[];
  travelMode: Option[];
  dayTime: Option[];
};

const infoOptions: PickInfoOption = {
  pplNum: [
    {label: '不限', value: 0},
    {label: '1人', value: 1},
    {label: '2人', value: 2},
    {label: '3-5人', value: 3},
    {label: '6-9人', value: 4},
    {label: '10人以上', value: 5},
  ],
  pplType: [
    {label: '不限', value: 0},
    {label: '学生', value: 1},
    {label: '同事', value: 2},
    {label: '亲子', value: 3},
  ],
  travelMode: [
    {label: '不限', value: 0},
    {label: '公交', value: 1},
    {label: '驾车', value: 2},
  ],
  dayTime: [
    {label: '3小时', value: 0},
    {label: '4小时', value: 1},
    {label: '5小时', value: 2},
    {label: '6小时', value: 3},
    {label: '7小时', value: 4},
    {label: '8小时', value: 5},
    {label: '9小时', value: 6},
    {label: '10小时', value: 7},
    {label: '11小时', value: 8},
    {label: '12小时', value: 9},
  ],
};

type PickInfoNavigationProp = StackNavigationProp<
  CreateJourneyParamList,
  'Info'
>;

type Props = {
  navigation: PickInfoNavigationProp;
};

const PickInfo = ({navigation}: Props) => {
  const [pplNum, setPplNum] = useState(0);
  const [pplType, setPplType] = useState(0);
  const [travelMode, setTavelMode] = useState(0);
  const [dayTime, setDayTime] = useState(0);

  return (
    <>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          color="#fff"
          size={28}
          Component={TouchableNativeFeedback}
          onPress={() => {
            navigation.navigate('Date');
          }}
        />
        <View style={styles.headerCenter}>
          <Text style={styles.centerText}>选择行程信息</Text>
        </View>
        <Button
          title="下一步"
          type="clear"
          titleStyle={styles.rightText}
          disabledTitleStyle={styles.disabledStyle}
          onPress={() => {
            navigation.navigate('City');
          }}
        />
      </View>
      <View style={styles.pickerContainer}>
        <View>
          <Text>人数</Text>
          <Picker
            selected={pplNum}
            options={infoOptions.pplNum}
            onSelect={(value) => {
              setPplNum(+value);
            }}
          />
        </View>
        <View>
          <Text>人群</Text>
          <Picker
            selected={pplType}
            options={infoOptions.pplType}
            onSelect={(value) => {
              setPplType(+value);
            }}
          />
        </View>
        <View>
          <Text>出行方式</Text>
          <Picker
            selected={travelMode}
            options={infoOptions.travelMode}
            onSelect={(value) => {
              setTavelMode(+value);
            }}
          />
        </View>
        <View>
          <Text>每日游玩时间</Text>
          <Picker
            selected={dayTime}
            options={infoOptions.dayTime}
            onSelect={(value) => {
              setDayTime(+value);
            }}
          />
        </View>
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
  pickerContainer: {
    height: Dimensions.get('window').height - 64,
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default PickInfo;
