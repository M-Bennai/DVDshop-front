import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const AuthenticatedRoute = ({ path, component }) => {
  const { isAuthenticated } = useContext(Auth);

  return isAuthenticated ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default AuthenticatedRoute;
