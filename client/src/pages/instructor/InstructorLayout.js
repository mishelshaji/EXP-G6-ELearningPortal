import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/instructor/Header';
import SideNavigationBar from '../../components/instructor/SideNavigationBar';
import jwt_decode from 'jwt-decode';


function InstructorLayout() {
	const [showSidebar, setShowSidebar] = useState(false);

	const decodedToken = jwt_decode(localStorage.getItem('token'));

	if (decodedToken.token === null || decodedToken.role !== 'instructor') {
		return (
			<Navigate to={'/login'}></Navigate>
		)
	}

	return (
		<>
			<Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
			<Container fluid>
				<Row id='instructor-dashboard'>
					<SideNavigationBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
					<Outlet></Outlet>
				</Row>
			</Container>
		</>
	);
}

export default InstructorLayout;