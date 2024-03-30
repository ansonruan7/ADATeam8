import React, { createContext, useContext } from 'react';

const VariableContext = createContext();

export const VariableProvider = ({ children }) => {
  const variable = 'Hello from Context';
  return (
    <VariableContext.Provider value={setClickCount}>
      {children}
    </VariableContext.Provider>
  );
};

export const useVariable = () => useContext(VariableContext);
