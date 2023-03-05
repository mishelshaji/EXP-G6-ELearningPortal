import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { FiAlertTriangle } from 'react-icons/fi';

function UnauthorizedAccessPage() {
  return (
    <Container className="unauthorized-access-page">
          <div className="text-center">
            <FiAlertTriangle size={48} color="#ff8c00" />
            <h1>Unauthorized Access</h1>
            <p>You are not authorized to access this page.</p>
            <Button as={Link} to="/" variant="primary" className='me-2 mb-2'>
              Go to Home Page
            </Button>
            <Button as={Link} to="/login" variant="secondary" className='mb-2'>
              Login to Continue
            </Button>
          </div>
    </Container>
  );
}

export default UnauthorizedAccessPage;