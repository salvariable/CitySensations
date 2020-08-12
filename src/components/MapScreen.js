import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {useSearchesValue} from '../api/SearchesContext';

export default () => {
  const {currentCity} = useSearchesValue();

  return (
    <View
      style={{
        flex: 3,
      }}>
      <MapView
        provider={'google'} // remove if not using Google Maps
        style={{flex: 3}}
        region={{
          latitude: currentCity.coords.lat,
          longitude: currentCity.coords.lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};
