import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CreateJourneyParamList} from '.';
import {Icon, Button, Input, ListItem} from 'react-native-elements';
import Chip from '../../../components/Chip';

type PickInfoNavigationProp = StackNavigationProp<
  CreateJourneyParamList,
  'City'
>;

type Props = {
  navigation: PickInfoNavigationProp;
};

const PickCity = ({navigation}: Props) => {
  const [cities, setCities] = useState([
    {name: '广州', citycode: '0000'},
    {name: '成都', citycode: '0001'},
  ]);
  const [candidates] = useState([
    {name: '广州', citycode: '0000'},
    {name: '成都', citycode: '0001'},
  ]);

  const handleAdd = (code: string) => () => {
    const addCity = candidates.find((cand) => cand.citycode === code);
    if (addCity) {
      const newCities = [...cities, addCity];
      setCities(newCities);
    }
  };

  const handleRemove = (code: string) => () => {
    const newCities = cities.filter((city) => city.citycode !== code);
    setCities(newCities);
  };

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
              navigation.navigate('Info');
            }}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.centerText}>选择目的地</Text>
        </View>
        <Button
          title="下一步"
          type="clear"
          titleStyle={styles.rightText}
          disabledTitleStyle={styles.disabledStyle}
          onPress={() => {
            navigation.navigate('Viewpoint');
          }}
          disabled={!cities.length}
        />
      </View>
      <View style={styles.container}>
        <Input
          placeholder="搜索目的地"
          leftIcon={{name: 'search', color: '#aaa'}}
        />
        <View style={styles.chipContainer}>
          {cities.map((city) => (
            <Chip
              key={city.citycode}
              color="#fff"
              style={styles.chip}
              title={city.name}
              onCancel={handleRemove(city.citycode)}
            />
          ))}
        </View>
      </View>
      <View style={styles.list}>
        {candidates.map((cand, idx) => (
          <ListItem
            key={cand.citycode}
            title={cand.name}
            bottomDivider={Boolean(idx !== candidates.length - 1)}
            rightIcon={
              !cities.find((city) => city.citycode === cand.citycode) ? (
                <Icon
                  name="add"
                  color="#4DB6AC"
                  onPress={handleAdd(cand.citycode)}
                />
              ) : (
                <></>
              )
            }
          />
        ))}
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
  container: {
    paddingVertical: 12,
    shadowColor: '#000',
    elevation: 1,
    overflow: 'hidden',
  },
  chipContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  chip: {
    marginLeft: 6,
    backgroundColor: '#4DB6AC',
  },
  list: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default PickCity;
