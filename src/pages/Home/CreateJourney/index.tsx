import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PickDate from './PickDate';
import PickInfo from './PickInfo';
import PickCity from './PickCity';
import PickViewpoint from './PickViewpoint';
import {forHorizontal} from '../../../common/utils';

export type CreateJourneyParamList = {
  Date: undefined;
  Info: undefined;
  City: undefined;
  Viewpoint: undefined;
};

const Stack = createStackNavigator<CreateJourneyParamList>();

const CreateJourney = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Date" component={PickDate} />
      <Stack.Screen
        name="Info"
        component={PickInfo}
        options={{cardStyleInterpolator: forHorizontal}}
      />
      <Stack.Screen
        name="City"
        component={PickCity}
        options={{cardStyleInterpolator: forHorizontal}}
      />
      <Stack.Screen
        name="Viewpoint"
        component={PickViewpoint}
        options={{cardStyleInterpolator: forHorizontal}}
      />
    </Stack.Navigator>
  );
};

export default CreateJourney;
