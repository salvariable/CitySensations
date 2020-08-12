import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {TextInput, IconButton, Chip} from 'react-native-paper';
// import {SearchesContext} from '../api/SearchesContext';

export default () => {
  const [input, setInput] = useState(null);
  // const [state, setState] = useContext(SearchesContext);

  const createSearchRegistry = (newValues) =>
    setState(() => ({...state, ...newValues.name, ...newValues.main}));

  const fetchWeatherData = (city = 'Buenos Aires') => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac613ed38f8bfed934e0e16ba5222f1f`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log('What is json =====', json);
        // createSearchRegistry(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View
      style={{
        backgroundColor: 'purple',
        justifyContent: 'space-around',
        padding: 24,
      }}>
      {/* {
        // Last search results &&
        <Text style={{color: 'white'}}>Last search results:</Text>
        // state.map(city => <Chip onPress={() => console.log('Change current city, animateToCoordinate')} onClose={() => console.log("Delete from state")} >{city.name}</Chip>)
      } */}
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
