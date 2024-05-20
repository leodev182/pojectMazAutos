import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

const NavBarProvider = ({ children }) => {

    const [activeToken, setActiveToken] = useState({})
    const [activePage, setActivePage] = useState({
        name: activeToken ? 'Cerrar Sesión' : 'Iniciar Sesión',
        href: activeToken ? '/' : '/login',
    });

  return (
    <NavBarContext.Provider value={{ activePage, setActivePage, activeToken, setActiveToken }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider