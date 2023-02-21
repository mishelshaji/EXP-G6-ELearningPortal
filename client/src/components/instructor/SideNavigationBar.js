import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideNavigationBar(props) {
    return (
        <Col sm={3} md={2} className={`bg-white ${props.showSidebar ? 'd-block' : 'd-none'}`}>
            <Nav className="flex-column">
                <Link to="/instructor/courses" className='text-decoration-none mb-3'>My Courses</Link>
                <Link to="/instructor/create" className='text-decoration-none mb-3'>Create Course</Link>
                <Link to="/instructor/students" className='text-decoration-none mb-3'>Enrolled Students</Link>
                <Link to="/instructor/feedback" className='text-decoration-none mb-3'>Course Feedbacks</Link>
                <Link to="/instructor/course-request" className='text-decoration-none mb-3'>Course Request Status</Link>
                <Link to="/instructor/profile" className='text-decoration-none mb-3'>Profile</Link>
                <Link to="/instructor/logout" className='text-decoration-none mb-3'>Log out</Link>
            </Nav>
        </Col>
    )
}

export default SideNavigationBar