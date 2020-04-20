import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Journey from './Journey';
import Discovery from './Discovery';

type HomeTabParamList = {
  Journey: undefined;
  Discovery: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Journey') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Discovery') {
            iconName = focused ? 'compass' : 'compass-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Journey" component={Journey} />
      <Tab.Screen name="Discovery" component={Discovery} />
    </Tab.Navigator>
  );
};

export default Home;
