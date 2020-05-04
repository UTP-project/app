import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CreateJourneyParamList} from '.';
import {Icon, Button, Card, Text, Rating} from 'react-native-elements';
import TouchableWrapper from '../../../components/TouchableWrapper';

type PickInfoNavigationProp = StackNavigationProp<
  CreateJourneyParamList,
  'Viewpoint'
>;

type Props = {
  navigation: PickInfoNavigationProp;
};

const PickViewpoint = ({navigation}: Props) => {
  const [candidates] = useState([
    {
      id: 'B00140WBI1',
      name: '广州塔',
      business_area: '赤岗',
      photos: [
        {
          title: [],
          url:
            'http://store.is.autonavi.com/showpic/11802bd9c048f9e8439038ebefbd950e',
        },
      ],
      biz_ext: {rating: '4.7', cost: '150.00', ticket_ordering: '1'},
    },
    {
      id: 'B0014014AD',
      name: '白云山风景名胜区',
      business_area: '',
      photos: [
        {
          title: [],
          url:
            'http://store.is.autonavi.com/showpic/18806769bd40794b77f7fb90252373b1',
        },
      ],
      biz_ext: {rating: '4.7', cost: '5.00', ticket_ordering: '1'},
    },
  ]);
  const [viewpoints, setViewpoints] = useState([
    {
      id: 'B00140WBI1',
      name: '广州塔',
      business_area: '赤岗',
      photos: [
        {
          title: [],
          url:
            'http://store.is.autonavi.com/showpic/11802bd9c048f9e8439038ebefbd950e',
        },
      ],
      biz_ext: {rating: '4.7', cost: '150.00', ticket_ordering: '1'},
    },
  ]);

  const isSelected = (id: string) => {
    return Boolean(viewpoints.find((v) => v.id === id));
  };

  const handleSelect = (id: string) => () => {
    let newViewpoints = viewpoints.slice(0);
    if (isSelected(id)) {
      newViewpoints = viewpoints.filter((v) => v.id !== id);
    } else {
      const addViewpoint = candidates.find((cand) => cand.id === id);
      if (addViewpoint) {
        newViewpoints.push(addViewpoint);
      }
    }
    setViewpoints(newViewpoints);
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
          disabled={!viewpoints.length}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {candidates.map((cand) => (
            <View key={cand.id} style={styles.actionCardContainer}>
              <TouchableWrapper onLongPress={handleSelect(cand.id)}>
                <Card
                  imageStyle={styles.image}
                  image={{uri: cand.photos[0].url}}
                  containerStyle={styles.card}>
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>{cand.name}</Text>
                    <Text>{cand.business_area}</Text>
                  </View>
                  <View style={styles.cardContent}>
                    <View style={styles.rating}>
                      <Rating
                        readonly
                        startingValue={+cand.biz_ext.rating}
                        imageSize={24}
                      />
                      <Text style={styles.ratingText}>
                        {cand.biz_ext.rating}
                      </Text>
                    </View>
                    <View>
                      <Icon
                        name="favorite"
                        color={isSelected(cand.id) ? '#EF5350' : '#aaa'}
                      />
                    </View>
                  </View>
                </Card>
              </TouchableWrapper>
            </View>
          ))}
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
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    marginRight: 12,
  },
  cardContent: {
    flexDirection: 'row',
  },
  rating: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 12,
  },
});

export default PickViewpoint;
