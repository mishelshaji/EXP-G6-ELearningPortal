import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

export default function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/student/">
          <Navbar.Brand>
            <img
              src={Logo}
              width="200"
              className="d-inline-block align-top"
              alt="myLearn"
              id="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/student/enrolled-courses" className="nav-link">
              My Courses
            </Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/student/profile" className="nav-link">
                  My Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/student/payments" className="nav-link">
                  My Transactions
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/student/logout" className="nav-link">
                  Log out
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}