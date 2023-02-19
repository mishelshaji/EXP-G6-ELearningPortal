import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function UserLayout() {
  return (
    <>
      <NavigationBar/>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default UserLayout;