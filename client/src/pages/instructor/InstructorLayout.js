import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/instructor/Header';
import SideNavigationBar from '../../components/instructor/SideNavigationBar';

function InstructorLayout() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
			<Container fluid>
				<Row id='instructor-dashboard'>
					<SideNavigationBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
					<Outlet></Outlet>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default InstructorLayout;