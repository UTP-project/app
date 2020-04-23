import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

import {CreateJourneyParamList} from '.';

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
            selectedValue={pplNum}
            prompt="人数"
            onValueChange={(itemValue) => {
              setPplNum(+itemValue);
            }}>
            <Picker.Item label="不限" value={0} />
            <Picker.Item label="1人" value={1} />
            <Picker.Item label="2人" value={2} />
            <Picker.Item label="3~5人" value={3} />
            <Picker.Item label="6~9人" value={4} />
            <Picker.Item label="10人以上" value={5} />
          </Picker>
        </View>
        <View>
          <Text>人群</Text>
          <Picker
            selectedValue={pplType}
            prompt="人群"
            onValueChange={(itemValue) => {
              setPplType(+itemValue);
            }}>
            <Picker.Item label="不限" value={0} />
            <Picker.Item label="学生" value={1} />
            <Picker.Item label="同事" value={2} />
            <Picker.Item label="亲子" value={3} />
          </Picker>
        </View>
        <View>
          <Text>出行方式</Text>
          <Picker
            selectedValue={travelMode}
            prompt="出行方式"
            onValueChange={(itemValue) => {
              setTavelMode(+itemValue);
            }}>
            <Picker.Item label="不限" value={0} />
            <Picker.Item label="驾车" value={1} />
            <Picker.Item label="公交" value={2} />
          </Picker>
        </View>
        <View>
          <Text>每日游玩时间</Text>
          <Picker
            selectedValue={dayTime}
            prompt="每日游玩时间"
            onValueChange={(itemValue) => {
              setDayTime(+itemValue);
            }}>
            <Picker.Item label="3小时" value={0} />
            <Picker.Item label="4小时" value={1} />
            <Picker.Item label="5小时" value={2} />
            <Picker.Item label="6小时" value={3} />
            <Picker.Item label="7小时" value={4} />
            <Picker.Item label="8小时" value={5} />
            <Picker.Item label="9小时" value={6} />
            <Picker.Item label="10小时" value={7} />
            <Picker.Item label="11小时" value={8} />
            <Picker.Item label="12小时" value={9} />
          </Picker>
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
    paddingTop: 48,
    paddingBottom: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default PickInfo;
