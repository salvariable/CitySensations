import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, Chip, IconButton} from 'react-native-paper';
import {useSearchesValue} from '../api/SearchesContext';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

export default () => {
  const [input, setInput] = useState(null);
  const [savedResults, setSavedResults] = useState(null);

  useEffect(() => {
    getDataFromCache();
  }, []);

  const getDataFromCache = async () => {
    try {
      const value = await AsyncStorage.getItem('CACHE_RESULTS');
      if (value) {
        setSavedResults(JSON.parse(value));
      }
    } catch (e) {
      Alert.alert('There was an error getting the data in cache, beware');
      console.log('Error in getItem: ', e);
    }
  };

  const {
    currentCity,
    switchCurrentCity,
    lastResults,
    updateResultsTray,
    deleteResult,
  } = useSearchesValue();

  const fetchWeatherData = (city = 'Buenos Aires') => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac613ed38f8bfed934e0e16ba5222f1f`,
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === '404') {
          return Alert.alert('Please enter a valid city name');
        }

        const cityObject = {
          name: json.name,
          country: json.sys.country,
          main: json.main,
          coords: json.coord,
          created: moment().format(),
        };

        switchCurrentCity(cityObject);
        updateResultsTray(cityObject);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resultsToBeRendered = lastResults.length
    ? lastResults
    : savedResults
    ? savedResults
    : null;

  return (
    <View
      style={{
        flex: currentCity.name ? null : 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}>
      {savedResults.length || lastResults.length ? (
        <Text style={{color: 'white'}}>Last search results:</Text>
      ) : null}
      {resultsToBeRendered && (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {resultsToBeRendered.map((city) => (
            <Chip
              style={{margin: 4}}
              onPress={() => switchCurrentCity(city)}
              onClose={() => deleteResult(city)}
              key={city.created}>
              {city.name}
            </Chip>
          ))}
        </View>
      )}
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        Instant weather specifics for any city in the world!
      </Text>
      <View style={{flexDirection: 'row', padding: 16, alignSelf: 'center'}}>
        <TextInput
          autoCapitalize={'words'}
          autoCorrect
          label="Type in the name of a city"
          onChangeText={(text) => setInput(text)}
          style={{width: '100%'}}
        />
        <IconButton
          icon="search"
          color="white"
          size={20}
          onPress={() => fetchWeatherData(input)}
        />
      </View>
    </View>
  );
};
