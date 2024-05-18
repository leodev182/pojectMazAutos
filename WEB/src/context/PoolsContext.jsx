import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
  const url = "/pools.json";
  // const url2 = "http://localhost:9080/pools";
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pools, setPools] = useState([]);
  const [payment, setPayment] = useState("");

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPools([...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pools);

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

export default ContextProvider;
