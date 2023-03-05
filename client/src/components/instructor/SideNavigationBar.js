import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

function SideNavigationBar(props) {
    return (
        <Col sm={3} md={2} className={`bg-white ${props.showSidebar ? 'd-block' : 'd-none'}`}>
            <Nav className="flex-column">
                <Link to="/instructor/courses" className='text-decoration-none mb-3'>My Courses</Link>
                <Link to="/instructor/create" className='text-decoration-none mb-3'>Create Course</Link>
                <Link to="/instructor/feedback" className='text-decoration-none mb-3'>Course Feedbacks</Link>
                <Link to="/instructor/profile" className='text-decoration-none mb-3'>Profile</Link>
                <div className='d-grid logout-button'>
                    <LogoutButton />
                </div>
            </Nav>
        </Col>
    )
}

export default SideNavigationBar