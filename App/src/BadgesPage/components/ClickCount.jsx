import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ clickCount, setClickCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
