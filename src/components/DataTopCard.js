import React from 'react';
import {View, Text} from 'react-native';

export default ({dataSource}) => {
  const currentDataSource = {
    temperature: 37,
    pressure: 15,
    humidity: 100,
    maxTemperature: 120,
    minTemperature: 12,
  };

  const renderWeatherElement = () => {
    return (
      <View style={{flexDirection: 'row', padding: 8}}>
        <View>{/* Icon goes here */}</View>
        <Text>{/* Label goes here */}</Text>
        <Text>{currentDataSource}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 2,
        backgroundColor: 'red',
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text>Data demo</Text>
      {
        <Text>
          temperature: 37{'\n'}pressure: 15{'\n'}humidity: 100{'\n'}
          maxTemperature: 120{'\n'}minTemperature: 12
        </Text>
      }
    </View>
  );
};
