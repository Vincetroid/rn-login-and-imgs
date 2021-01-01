import React from 'react';

const AuthContext = React.createContext();

//Used as a wrapper for App component (at the very top end)
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>
    {children}
  </AuthContext.Provider>;
};

//To consume the values of context
export default AuthContext;