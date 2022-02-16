import React from "react";
import { createContext } from "react";

export const AuthContext = createContext("");

export default React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value) => {},
});
