import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../../components/student/NavigationBar";
import Footer from '../../components/Footer';
import jwt_decode from 'jwt-decode';

function StudentLayout() {
  
	const decodedToken = jwt_decode(localStorage.getItem('token'));

  if (decodedToken.token === null || decodedToken.role !== 'student') {
		return (
			<Navigate to={'/login'}></Navigate>
		)
	}

  return (
    <>
      <NavigationBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default StudentLayout;