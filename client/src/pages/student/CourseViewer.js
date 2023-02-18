import React from 'react';
import { Container, Row, Col, Card, ListGroup, Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CourseViewer() {
    return (
        <Container className='mt-4 ff-rubik bg-light' fluid>
            <Row>
                <Col md={8}>
                    <iframe
                        title='course video'
                        width='100%'
                        height='450'
                        src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                        allowFullScreen
                    />
                    <Card className='mt-3'>
                        <Card.Body>
                            <Card.Title>Course Title</Card.Title>
                            <Card.Text className='ff-oxygen'>
                                <span className='mt-2 d-block mb-2'>Level: Beginner</span>
                                Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the HIGHEST RATED courses in the history of Udemy!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mt-3 mb-3'>
                        <Card.Body>
                            <Card.Title>Give Feedback</Card.Title>
                            <div class="mb-3">
                                <textarea class="form-control" rows="3"></textarea>
                                <button className='btn btn-primary mt-3 float-end'>Submit Feedback</button>
                            </div>
                        </Card.Body>
                        <ListGroup variant='flush' className='ff-oxygen'>
                            <ListGroup.Item>
                                <span className='d-block my-2 ff-rubik'>User 1</span>
                                The course is very detailed and you can tell that a lot of hard work was put into making this course. Although, it could use some updating, I'd say it's not a disadvantage because it encourages you to do your own research.
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header className='text-white bg-info'>
                            Course Sections
                        </Card.Header>
                        <ListGroup variant='flush'>
                            <Dropdown as={ButtonGroup}>
                                <ListGroup.Item action>Section 1: Introduction</ListGroup.Item>
                                <Dropdown.Toggle split variant="white" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Mark completed</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ListGroup>
                    </Card>
                    <Card className='mt-3'>
                        <Card.Header className='light-purple bg-white'>
                            About Instructor
                        </Card.Header>
                        <Row className='p-3'>
                            <Col xs={6}>Name</Col>
                            <Col xs={6}>: John Doe</Col>
                            <Col xs={6}>Education</Col>
                            <Col xs={6}>: MCA</Col>
                            <Col xs={6}>Year of experience</Col>
                            <Col xs={6}>: 20</Col>
                            <Col xs={6}>Area of expertize</Col>
                            <Col xs={6}>: Nodejs</Col>
                            <Col xs={6}>Email</Col>
                            <Col xs={6}>: johndoe@mail.com</Col>
                            <Col xs={6}>Mobile</Col>
                            <Col xs={6}>: 9089987898</Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseViewer;