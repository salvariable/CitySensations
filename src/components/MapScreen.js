import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import {useSearchesValue} from '../api/SearchesContext';

export default () => {
  const {currentCity} = useSearchesValue();

  if (currentCity.name) {
    return (
      <View
        style={{
          flex: 3,
        }}>
        <MapView
          provider={'google'}
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
  }

  return [];
};
