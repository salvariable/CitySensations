import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {List, Icon} from 'react-native-paper';
import {useSearchesValue} from '../api/SearchesContext';

export default () => {
  const {name, country, main} = useSearchesValue();

  const renderWeatherElement = (element) => {
    return (
      <View style={{margin: 8}}>
        {/* <Icon name={element.icon}></Icon> */}
        <Text style={{fontSize: 12}}>{element.label}</Text>
        <Text style={{fontSize: 24, textAlign: 'center'}}>
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

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'orange',
      }}>
      <Text style={{alignSelf: 'center'}}>Weather right now in</Text>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
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

    //   {/* <View>
    //     <List.Item
    //       title="Pressure"
    //       left={(props) => <List.Icon {...props} icon="" />}
    //     />
    //
    //
    //   </View> */}
    //   {/* {
    //     <Text>
    //       temperature: 37{'\n'}pressure: 15{'\n'}humidity: 100{'\n'}
    //       maxTemperature: 120{'\n'}minTemperature: 12
    //     </Text>
    //   } */}
    // </View>
  );
};
