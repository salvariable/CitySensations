import React, {useState, useContext} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, IconButton, Chip} from 'react-native-paper';
import {useSearchesValue} from '../api/SearchesContext';
// import {SearchesContext} from '../api/SearchesContext';

export default () => {
  const [input, setInput] = useState(null);

  const {currentCity, switchCurrentCity} = useSearchesValue();

  const fetchWeatherData = (city = 'Buenos Aires') => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac613ed38f8bfed934e0e16ba5222f1f`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log('What is json =====', json);
        if (json.cod === '404') {
          return Alert.alert('Please enter a valid city name');
        }
        switchCurrentCity(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: currentCity.name ? null : 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}>
      {/* {
        // Last search results &&
        <Text style={{color: 'white'}}>Last search results:</Text>
        // state.map(city => <Chip onPress={() => console.log('Change current city, animateToCoordinate')} onClose={() => console.log("Delete from state")} >{city.name}</Chip>)
      } */}
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        Instant weather specifics for any city in the world!
      </Text>
      <View style={{flexDirection: 'row', padding: 16, alignSelf: 'center'}}>
        <TextInput
          autoCapitalize
          autoCorrect
          label="Type in the name of a city"
          onChangeText={(text) => setInput(text)}
          style={{width: '100%'}}
        />
        <IconButton
          icon="search"
          color="green"
          size={24}
          onPress={() => fetchWeatherData(input)}
        />
      </View>
    </View>
  );
};
