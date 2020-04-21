import React from 'react';
import {useHeaderHeight} from '@react-navigation/stack';
import {StyleSheet, View, Text} from 'react-native';

const CreateJourney = () => {
  const headerHeight = useHeaderHeight();
  const containerStyle = StyleSheet.flatten([
    styles.container,
    {
      marginTop: headerHeight,
    },
  ]);

  return (
    <View style={containerStyle}>
      <Text>new journey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default CreateJourney;
