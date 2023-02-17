import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/student/NavigationBar";
import Footer from '../../components/Footer';

function StudentLayout() {
  return (
    <>
      <NavigationBar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}

export default StudentLayout;