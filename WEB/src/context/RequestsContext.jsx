import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const RequestContext = createContext({});

const RequestsContextProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);


  const getRequests = async (endPoint) => {
    try {

      const response = await axios.get(`http://localhost:9080/${endPoint}`);
      setResponse(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const postRequests = async (endPoint, payload) => {
    try {
      const response = await axios.post(
        `http://localhost:9080/${endPoint}`,
        payload
      );
      setResponse(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        response,
        setResponse,
        loading,
        setLoading,
        getRequests,
        postRequests,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestsContextProvider;
