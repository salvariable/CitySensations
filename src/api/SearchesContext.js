import React, {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const SearchesContext = createContext();

export const SearchesProvider = ({children}) => {
  const [currentCity, setCurrentCity] = useState({});
  const [lastResults, setLastResults] = useState([]);

  const switchCurrentCity = (value) => setCurrentCity(value);

  const updateResultsTray = (cityValues) => {
    const newResult = {
      name: cityValues.name,
      country: !cityValues.country
        ? cityValues.sys.country
        : cityValues.country,
      main: cityValues.main,
      coords: !cityValues.coord ? cityValues.coords : cityValues.coord,
    };
    setLastResults((state) => {
      if (
        state.filter(
          (city) =>
            city.name === newResult.name && city.coords === newResult.coords,
        ).length === 0
      ) {
        state.push(newResult);
        storeResultsInCache(state);
      }
      return state;
    });
  };

  const deleteResult = (target) => {
    return setLastResults((state) => {
      return state.filter((city) => city !== target);
    });
  };

  const storeResultsInCache = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('CACHE_RESULTS', jsonValue);
    } catch (e) {
      Alert.alert('There was an error saving the data in cache, beware');
      console.log('Error in setItem: ', e);
    }
  };

  return (
    <SearchesContext.Provider
      value={{
        currentCity,
        switchCurrentCity,
        lastResults,
        updateResultsTray,
        deleteResult,
      }}>
      {children}
    </SearchesContext.Provider>
  );
};

export const useSearchesValue = () => useContext(SearchesContext);
