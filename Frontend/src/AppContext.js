import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(window.localStorage.getItem("isAdmin") === "true");

  return (
    <AppContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
