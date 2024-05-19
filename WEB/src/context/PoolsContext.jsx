import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useSecureUrl from "../hooks/useSecureUrl";

export const MyContext = createContext({});

const PoolsContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pools, setPools] = useState([]);
  const [payment, setPayment] = useState("");

  const getDataPools = async () => {
    const apiUrl = useSecureUrl();
    const response = await axios.get(`${apiUrl.url}/pools`);
    const data = response.data.data;
    setPools([...data]);
  };

  useEffect(() => {
    getDataPools();
  }, []);

  return (
    <MyContext.Provider
      value={{
        amount,
        setAmount,
        quantity,
        setQuantity,
        pools,
        setPools,
        payment,
        setPayment,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default PoolsContextProvider;
