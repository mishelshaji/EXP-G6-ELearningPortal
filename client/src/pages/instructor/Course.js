import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBook, FaUsers } from 'react-icons/fa';
import Axios from '../../services/axios';

function Course() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const courseId = urlParams.get('c');
    const [error, setError] = useState('')
    const [course, setCourse] = useState('');
    const [courseContent, setCourseContent] = useState('');

    useEffect(() => {
        Axios.get(`instructor/courses/${courseId}`)
            .then((course) => {
                setCourse(course.data);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setError('No course found');
                }
            });
    }, []);

    return (
        <Col sm={9} md={10} className='mx-auto mt-4'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='mt-4 mb-3'>title</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Card className='my-3'>
                            <Card.Body>
                                <Card.Text>des</Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <FaBook className='mr-2 text-primary' />
                                        10 Lessons
                                    </div>
                                    <div>
                                        <FaUsers className='mr-2 text-primary' />
                                        100 Students
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='my-3'>
                            <Card.Body>
                                <Card.Title>Instructor</Card.Title>
                                <Card.Text>name</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='my-3'>
                            <Card.Body>
                                <Card.Title>Price</Card.Title>
                                <Card.Text>100</Card.Text>
                                <Button variant='primary'>Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

export default Course;
