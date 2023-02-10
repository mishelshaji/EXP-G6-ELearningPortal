import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

export default function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            width="200"
            className="d-inline-block align-top"
            alt="myLearn"
            id='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/about" className='nav-link'>About Us</Link>
            <Link to="/contact" className='nav-link'>Contact Us</Link>
            <Link to="/courses" className='nav-link'>Explore Courses</Link>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/student/registration" className='nav-link'>Student</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/instructor/registration" className='nav-link'>Instructor</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/login" className='nav-link'>Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}