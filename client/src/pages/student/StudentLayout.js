import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../../components/student/NavigationBar";
import Footer from '../../components/Footer';

function StudentLayout() {
  if(localStorage.getItem('token') == null){
    return (
      <Navigate to={'/login'}></Navigate>
    )
  }
  return (
    <>
      <NavigationBar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}

export default StudentLayout;