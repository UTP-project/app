import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PickDate from './PickDate';
import useReady from '../../../components/useReady';

type CreateJourneyParamList = {
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
    </Stack.Navigator>
  );
};

export default CreateJourney;
