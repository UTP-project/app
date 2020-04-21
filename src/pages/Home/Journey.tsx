import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const Journey = () => {
  const [journey] = useState([
    {
      id: 1,
      day: 5,
      startDay: new Date(),
      desc: '广州五日游',
      image:
        'http://store.is.autonavi.com/showpic/18806769bd40794b77f7fb90252373b1',
    },
    {
      id: 2,
      day: 9,
      startDay: new Date(),
      desc: '广州九日游',
      image:
        'http://store.is.autonavi.com/showpic/11802bd9c048f9e8439038ebefbd950e',
    },
    {
      id: 3,
      day: 48,
      startDay: new Date(),
      desc: '神奇游',
      image:
        'http://store.is.autonavi.com/showpic/0cb21e46a456d38dabb614ed05a3e0fa',
    },
  ]);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {journey.map((o) => (
            <View key={o.id} style={styles.actionCardContainer}>
              <TouchableNativeFeedback onPress={() => {}}>
                <Card
                  imageStyle={styles.image}
                  image={{uri: o.image}}
                  containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <View style={styles.day}>
                      <Text h3 style={styles.dayNum}>
                        {o.day}
                      </Text>
                      <Text>天</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View style={styles.describe}>
                      <Text>{`${o.startDay}`}</Text>
                      <Text>{o.desc}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableNativeFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  actionCardContainer: {
    marginVertical: 6,
  },
  card: {
    margin: 0,
    width: '100%',
  },
  image: {
    height: 0,
    paddingTop: '60%', // 5:3
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
});

export default Journey;
