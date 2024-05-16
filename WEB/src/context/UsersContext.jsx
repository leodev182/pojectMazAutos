import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
    const url = 'users.json';
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setUsers([...data]);
    }

    useEffect(()=> {
        getData();
      },
        []
      )    
      
      
      console.log(users)

    return (
        <MyContext.Provider value={{users, setUsers}}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;
