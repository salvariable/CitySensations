import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        borderTopStartRadius: 48,
        borderTopEndRadius: 48,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 24,
      }}>
      <Text>Barra de búsqueda</Text>
      <TextInput style={{width: '100%'}} />
    </View>
  );
};
