import React, { useState } from 'react';

const AuthContext = React.createContext();

//Used as a wrapper for App component (at the very top end)
export const AuthProvider = ({ children }) => {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const [authToken, setAuthToken] = useState('fdsfdsf');

  return <AuthContext.Provider value={{ authToken, setAuthToken }}>
    {children}
  </AuthContext.Provider>;
};

//To consume the values of context
export default AuthContext;