import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import useReady from '../../../components/useReady';
import PickDate from './PickDate';
import PickInfo from './PickInfo';

export type CreateJourneyParamList = {
  Date: undefined;
  Info: undefined;
  City: undefined;
  Viewpoint: undefined;
};

const Stack = createStackNavigator<CreateJourneyParamList>();

const CreateJourney = () => {
  const WrappedPickDate = useReady(PickDate);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Date" component={WrappedPickDate} />
      <Stack.Screen name="Info" component={PickInfo} />
    </Stack.Navigator>
  );
};

export default CreateJourney;
