/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DataTopCard from './src/components/DataTopCard';
import MapScreen from './src/components/MapScreen';
import FooterSearchBar from './src/components/FooterSearchBar';
import {SearchesProvider} from './src/api/SearchesContext';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <FontAwesome {...props} />,
      }}>
      <SearchesProvider>
        <View style={styles.container}>
          <DataTopCard />
          <MapScreen />
          <FooterSearchBar />
        </View>
      </SearchesProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
