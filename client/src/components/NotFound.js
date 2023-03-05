import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';

function NotFound() {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <FiAlertOctagon size={100} color="#dc3545" />
            <h1 className="text-center mt-3">404 - Page Not Found</h1>
            <p className="text-center mt-3">The page you are looking for could not be found.</p>
            <Link to="/" className="d-block text-center mt-3">Go back to home page</Link>
        </Container>
    )
}

export default NotFound