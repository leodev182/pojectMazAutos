import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

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

  const makeRequest = async (method, url, data = null) => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:9080",
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        if (role) {
          config.headers["Role"] = role;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return axiosInstance[method](url, data);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        saveToken,
        removeToken,
        userId,
        setUserId,
        role,
        setRole,
        makeRequest,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
