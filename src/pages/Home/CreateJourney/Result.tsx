import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CreateJourneyParamList} from '.';
import {Icon, Card, Text, Button} from 'react-native-elements';
import {MapView} from 'react-native-amap3d';

import TouchableWrapper from '../../../components/TouchableWrapper';

type PickInfoNavigationProp = StackNavigationProp<
  CreateJourneyParamList,
  'Result'
>;

type Props = {
  navigation: PickInfoNavigationProp;
};

const Result = ({navigation}: Props) => {
  const [routes] = useState([
    {id: '0', day: 1, city: '广州', viewpoints: [1, 2, 3]},
    {id: '1', day: 2, city: '广州', viewpoints: [4, 5, 6]},
    {id: '2', day: 3, city: '广州', viewpoints: [7, 8, 9]},
    {id: '3', day: 4, city: '广州', viewpoints: [10, 11, 12]},
    {id: '4', day: 5, city: '广州', viewpoints: [13, 14, 15]},
  ]);

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
              navigation.navigate('Viewpoint');
            }}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.centerText}>行程</Text>
        </View>
        <Button
          title="优化路线"
          type="clear"
          titleStyle={styles.rightText}
          onPress={() => {}}
        />
      </View>
      <MapView style={styles.map} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.actionCardContainer}>
            {routes.map((route) => (
              <TouchableWrapper key={route.id} onPress={() => {}}>
                <Card>
                  <View style={styles.cardContent}>
                    <View style={styles.day}>
                      <Text h4 style={styles.dayNum}>
                        Day {route.day}
                      </Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.describe}>
                      <Text>{route.city}</Text>
                      <Text>{route.viewpoints.join(' -> ')}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableWrapper>
            ))}
          </View>
        </View>
      </ScrollView>
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
    height: '100%',
  },
  actionCardContainer: {
    marginVertical: 6,
  },
  cardInner: {
    flexDirection: 'row',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  dayNum: {
    marginRight: 6,
  },
  verticalDivider: {
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: '#999',
    marginHorizontal: 12,
  },
  describe: {
    flexGrow: 1,
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').width * 0.75,
  },
});

export default Result;
