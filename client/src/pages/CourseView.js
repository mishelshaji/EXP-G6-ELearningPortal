import React, { useEffect, useState } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import backgroundImage from '../images/cover.jpg';
import Axios from '../services/axios';

const ViewCourseDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const courseId = urlParams.get('c');
    const [course, setCourse] = useState([]);
    const [contents, setContents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async function fetchCourses() {
            try {
                const allCourses = await Axios.get(`/courses/${courseId}`);
                setCourse(allCourses.data[0]);
                const courseContents = await Axios.get(
                    `/courses/contents/${courseId}`
                );
                setContents(courseContents.data);
            } catch (err) {
                const error = err.response.data;
                if (!error) {
                    setError('No course found');
                }
                if (error.errors.Error) {
                    setError(error.errors.Error);
                }
            }
        })();
    }, [courseId]);

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '45vh',
        color: 'white',
        padding: '50px'
    };

    const titleStyles = {
        fontWeight: 'bold'
    };

    return (
        <Container fluid style={styles}>
            <div className='d-block'>
                <h1 style={titleStyles}>{course.title}</h1>
                <p>{course.metaDescription}</p>
                {/* <p>Created At : {(course.createdAt).slice(0, 10)}</p> */}
                <p>Language : {course.language}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <Table
                    striped
                    bordered
                    hover
                    variant='light'
                    className='mt-5 me-5'
                >
                    <thead>
                        <tr>
                            <th>Chapter Name</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents.map((content, index) => (
                            <tr key={index}>
                                <td>{content.title}</td>
                                <td>{content.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {error ? <span>{error}</span> : ''}
                <Card
                    style={{
                        width: '18rem',
                        marginRight: '2rem',
                        marginTop: '-100px'
                    }}
                >
                    <Card.Img variant='top' src={`http://localhost:80/public/${course.featuredImageLink}`} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{course.title}</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                            {course.metaDescription}
                        </Card.Text>
                        <Card.Text style={{ color: 'red' }}>{parseFloat(course.price)}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <p style={{ color: 'black' }}>{course.detailedDescription}</p>
            <br></br>
        </Container>
    );
};

export default ViewCourseDetails;
