import React, {createContext, useReducer, useContext, useState} from 'react';

export const SearchesContext = createContext();

export const SearchesProvider = ({children}) => {
  const initialState = {
    name: 'Buenos Aires',
    country: 'AR',
    main: {
      temp: 0,
      pressure: 0,
      humidity: 10,
      temp_max: 1,
      temp_min: 1,
    },
  };

  const [currentCity, setCurrentCity] = useState(initialState);

  return (
    <SearchesContext.Provider value={currentCity}>
      {children}
    </SearchesContext.Provider>
  );
};

export const useSearchesValue = () => useContext(SearchesContext);
