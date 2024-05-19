import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useSecureUrl from "../hooks/useSecureUrl.jsx";

export const RequestContext = createContext({});

const ContextProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState([]);
  const [api, setApi] = useState("");
  const [loading, setLoading] = useState(true);
  const url = useSecureUrl();

  useEffect(() => {
    const getRequests = async () => {
      try {
        const response = await axios.get(`${url}/${api}`, request);
        setRequests(response.data);
        console.log(response.data);
        setLoading(false);
        return requests;
      } catch (error) {
        console.error(error);
      }
    };
    getRequests();
  }, []);

  return (
    <RequestContext.Provider
      value={{
        api,
        setApi,
        requests,
        setRequests,
        request,
        setRequest,
        loading,
        setLoading,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default ContextProvider;
