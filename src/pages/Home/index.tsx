import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './HomeTab';
import CreateJourney from './CreateJourney';

export type HomeStackParamList = {
  HomeTab: undefined;
  CreateJourney: undefined;
};

export type HomeTabParamList = {
  Journey: undefined;
  NewJourney: undefined;
  Discovery: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="CreateJourney" component={CreateJourney} />
    </Stack.Navigator>
  );
};

export default Home;
