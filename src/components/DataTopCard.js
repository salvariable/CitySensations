import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSearchesValue} from '../api/SearchesContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default () => {
  const {currentCity} = useSearchesValue();
  const {name, country, main} = currentCity;
  const renderWeatherElement = (element) => {
    return (
      <View style={{margin: 8, alignItems: 'center'}}>
        <FontAwesome5 name={element.icon} size={24} color={'white'} />
        <Text style={{fontSize: 12, color: 'white'}}>{element.label}</Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
          {main[element.key]}
        </Text>
      </View>
    );
  };

  const weatherSpecifics = [
    {
      label: 'Temperature',
      key: 'temp',
      icon: 'thermometer-half',
    },
    {
      label: 'Pressure',
      key: 'pressure',
      icon: 'tachometer-alt',
    },
    {
      label: 'Humidity',
      key: 'humidity',
      icon: 'water',
    },
    {
      label: 'Temp. max.',
      key: 'temp_max',
      icon: 'temperature-high',
    },
    {
      label: 'Temp. min.',
      key: 'temp_min',
      icon: 'temperature-low',
    },
  ];

  if (currentCity.name) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>
          Weather right now in
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            paddingTop: 16,
          }}>
          {name}, {country}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 16,
          }}>
          {weatherSpecifics.map((item) => renderWeatherElement(item))}
        </View>
      </SafeAreaView>
    );
  }

  return [];
};
