import React from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {HomeTabParamList, HomeStackParamList} from '.';
import {StackNavigationProp} from '@react-navigation/stack';

type NewJourneyNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList>,
  StackNavigationProp<HomeStackParamList, 'HomeTab'>
>;

const NewJourney = () => {
  const navigation = useNavigation<NewJourneyNavigationProp>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();

      navigation.navigate('CreateJourney');
    });
    return unsubscribe;
  }, [navigation]);
  return null;
};

export default NewJourney;
