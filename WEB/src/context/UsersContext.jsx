import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const saveToken = (newToken) => {
    setToken(newToken);
    window.localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setToken(null);
    window.localStorage.removeItem("token");
  };

  return (
    <MyContext.Provider
      value={{
        token,
        saveToken,
        removeToken,
        userId,
        setUserId,
        role,
        setRole,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
