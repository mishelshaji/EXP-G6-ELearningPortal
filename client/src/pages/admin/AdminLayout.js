import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Nav from '../../components/admin/Nav';
import SideNavigationBar from '../../components/admin/SideNavigationBar';

function AdminLayout() {

  const decodedToken = jwt_decode(localStorage.getItem('token'));

  if (decodedToken.token === null || decodedToken.role !== 'admin') {
    return (
      <Navigate to={'/login'}></Navigate>
    )
  }

  return (
    <div>
      <div className='header'></div>
      <div className='home-content'>
        <div className='header'>
          <div className='d-flex justify-content-around '></div>
          <Nav />
        </div>
        <div className='d-flex home-content'>
          <SideNavigationBar />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;