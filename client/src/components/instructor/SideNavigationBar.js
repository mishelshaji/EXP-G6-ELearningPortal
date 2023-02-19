import React from 'react';
import { Col, Nav } from 'react-bootstrap';

function SideNavigationBar(props) {
    return (
        <Col sm={3} md={2} className={`bg-white ${props.showSidebar ? 'd-block' : 'd-none'}`}>
            <Nav className="flex-column">
                <Nav.Link href="/instructor/courses">My Courses</Nav.Link>
                <Nav.Link href="/instructor/create-course">Create Course</Nav.Link>
                <Nav.Link href="/instructor/students">Enrolled Students</Nav.Link>
                <Nav.Link href="/instructor/feedback">Course Feedbacks</Nav.Link>
                <Nav.Link href="/instructor/course-request">Course Request Status</Nav.Link>
                <Nav.Link href="/instructor/profile">Profile</Nav.Link>
                <Nav.Link href="/instructor/logout">Log out</Nav.Link>
            </Nav>
        </Col>
    )
}

export default SideNavigationBar