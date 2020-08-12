import React, {createContext, useReducer, useContext, useState} from 'react';

export const SearchesContext = createContext();

export const SearchesProvider = ({children}) => {
  const [currentCity, setCurrentCity] = useState({});

  const switchCurrentCity = (value) => {
    return setCurrentCity((state) => ({
      ...state,
      name: value.name,
      country: value.sys.country,
      main: value.main,
      coords: value.coord,
    }));
  };
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
