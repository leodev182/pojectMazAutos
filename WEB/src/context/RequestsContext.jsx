import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useSecureUrl from "../hooks/useSecureUrl";

export const RequestContext = createContext({});

const RequestsContextProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = useSecureUrl();

  const getRequests = async (endPoint, request) => {
    try {
      const response = await axios.get(`${url}/${endPoint}`, request);
      setRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        requests,
        setRequests,
        loading,
        setLoading,
        getRequests,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestsContextProvider;
