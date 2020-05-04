import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

import Journey from './Journey';
import NewJourney from './NewJourney';
import Discovery from './Discovery';

export type HomeTabParamList = {
  Journey: undefined;
  NewJourney: undefined;
  Discovery: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator lazy={false}>
      <Tab.Screen
        name="Journey"
        component={Journey}
        options={{
          tabBarLabel: '行程',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="material-community"
              name={focused ? 'map' : 'map-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewJourney"
        component={NewJourney}
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: () => (
            <Icon
              reverse
              reverseColor="white"
              name="add"
              color="#4DB6AC"
              containerStyle={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type="material-community"
              name={focused ? 'compass' : 'compass-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeTab;
