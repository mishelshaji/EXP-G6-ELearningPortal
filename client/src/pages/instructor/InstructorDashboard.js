import React, { useEffect } from 'react';
import { Row, Col, Button, Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from "../../services/axios"

function InstructorDashboard() {
    useEffect(() => {
        Axios.get('/instructor/categories').then((res) => {

        });
    }, [])

    return (
        <>
            <Col sm={9} md={10} className='mx-auto mt-4'>
                <div>
                    <Row>
                        <Col md={3}>
                            <Card className='shadow bg-body-tertiary rounded mb-3'>
                                <Card.Body>
                                    <Card.Title>My Courses</Card.Title>
                                    <Card.Text>
                                        <span>50</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={'/instructor/courses'} className='btn btn-primary'>
                                        View Courses
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='shadow bg-body-tertiary rounded mb-3'>
                                <Card.Body>
                                    <Card.Title>Active Courses</Card.Title>
                                    <Card.Text>
                                        <span>20</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant='primary'>View All</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='shadow bg-body-tertiary rounded mb-3'>
                                <Card.Body>
                                    <Card.Title>Feedback</Card.Title>
                                    <Card.Text>
                                        <span>20</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant='primary'>
                                        View Feedback
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <p className='mt-5 fs-4'>Courses</p>
                    <Table striped hover responsive>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Course Id</th>
                                <th>Course</th>
                                <th>No. of Contents</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link className='text-dark text-decoration-none' to={'/instructor/course/?id=1'}>
                                        React for Beginners
                                    </Link>
                                </td>
                                <td>12</td>
                                <td>2022-02-01</td>
                                <td>2022-02-10</td>
                                <td>
                                    <Link className='btn btn-secondary' to={`/instructor/content/${1}`}>Add Contents</Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Col>
        </>
    );
}

export default InstructorDashboard;
