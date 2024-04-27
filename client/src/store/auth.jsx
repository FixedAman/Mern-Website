import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Define the storeTokenInLS function
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  //  tackling logout
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  // Provide the context value
  return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext value
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
