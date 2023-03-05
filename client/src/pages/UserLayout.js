import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function UserLayout() {
  return (
    <>
      <NavigationBar/>
      <Outlet></Outlet>
    </>
  );
}

export default UserLayout;