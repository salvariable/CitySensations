/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataTopCard from './src/components/DataTopCard';
import MapScreen from './src/components/MapScreen';
import FooterSearchBar from './src/components/FooterSearchBar';

const App = () => {
  const currentDataSource = {
    temperature: 37,
    pressure: 15,
    humidity: 100,
    maxTemperature: 120,
    minTemperature: 12,
  };

  return (
    <PaperProvider
      settings={{
        icon: (props) => <FontAwesome5 {...props} />,
      }}>
      <View style={styles.container}>
        <DataTopCard />
        <MapScreen />
        <FooterSearchBar />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
