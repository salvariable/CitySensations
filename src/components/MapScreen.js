import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

export default () => {
  return (
    <View
      style={{
        flex: 3,
      }}>
      <MapView
        provider={'google'} // remove if not using Google Maps
        style={{flex: 3}}
        region={{
          latitude: -34.604501,
          longitude: -58.396222,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};
