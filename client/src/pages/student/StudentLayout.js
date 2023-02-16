import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/student/NavigationBar';

function StudentLayout() {
  return (
    <>
      <NavigationBar/>
      <Outlet></Outlet>
    </>
  );
}

export default StudentLayout;