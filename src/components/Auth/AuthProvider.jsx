import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { getItem, removeItem, setItem } from "../../utils/persistentStorage";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getItem("session")?.role);

  const login = async (values) => {
    setItem("session", values);
    const role = values.role;
    setUser(role);
  };

  const logout = async () => {
    removeItem("session");
    setUser(null);
  };

  const contextValue = useMemo(
    () => ({
      user,
      logout,
      login,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };
