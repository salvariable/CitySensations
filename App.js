/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <FontAwesome5 {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <Text>Hola Mundo</Text>
        <FontAwesome5 name="air-freshener" color="#887700" size={256} />

        <TextInput />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
});

export default App;
