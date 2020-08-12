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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataTopCard from './src/components/DataTopCard';
import MapScreen from './src/components/MapScreen';
import FooterSearchBar from './src/components/FooterSearchBar';
import {SearchesProvider} from './src/api/SearchesContext';

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme,
        };

      default:
        return state;
    }
  };

  return (
    <PaperProvider
      settings={{
        icon: (props) => <FontAwesome5 {...props} />,
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
