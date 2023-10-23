import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [mod, setMod] = useState(true);

  return (
    <GlobalStateContext.Provider value={{ mod, setMod }}>
      {children}
    </GlobalStateContext.Provider>
  );
};