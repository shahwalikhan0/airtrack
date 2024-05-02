import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, login, setLogin, isAdmin, setIsAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
