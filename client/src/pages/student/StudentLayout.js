import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../../components/student/NavigationBar";
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
    </>
  );
}

export default StudentLayout;