import React from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <SideBar />
      {children}
    </>
  );
}

export default Layout;
