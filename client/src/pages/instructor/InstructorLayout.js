import React from 'react';
import { Outlet } from 'react-router-dom';

function InstructorLayout() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default InstructorLayout;