import React, {createContext, useReducer, useContext, useState} from 'react';

export const SearchesContext = createContext();

export const SearchesProvider = ({children}) => {
  const initialState = {
    name: 'Buenos Aires',
    country: 'AR',
    main: {
      temp: 2,
      pressure: 2,
      humidity: 3,
      temp_max: 2,
      temp_min: 2,
    },
  };

  const [currentCity, setCurrentCity] = useState(initialState);

  const switchCurrentCity = (value) =>
    setCurrentCity((state) => ({
      ...state,
      name: value.name,
      country: value.sys.country,
      main: value.main,
      coords: value.coord,
    }));

  return (
    <SearchesContext.Provider
      value={{
        currentCity,
        switchCurrentCity,
        // lastResults: [{}],
      }}>
      {children}
    </SearchesContext.Provider>
  );
};

export const useSearchesValue = () => useContext(SearchesContext);
