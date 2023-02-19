import React from 'react';
import { Container, Card, Button, Table } from 'react-bootstrap';
import videoImage from '../../images/code.jpg';
import backgroundImage from '../../images/cover.jpg';

const ViewCourseDetails = () => {
  const title = "JavaScript : Understanding the Weird Parts";
  const description = "An advanced JavaScript course for everyone!Scope, closures, prototypes,'this' , build your own framework, and more. ";
  const lecturer = "Vamshi Nadela";
  const language = "English";
  const CreatedAt = "2022-11-30";

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    videoImage: `url(${videoImage})`,
    backgroundSize: 'cover',
    height: '45vh',
    color: 'white',
    padding: '50px'
  };

  const courseContents = [
    { name: "Introduction to React", duration: "5 mins" },
    { name: "Setting up File", duration: "4 mins" },
    { name: "Create Variable", duration: "8 mins" },
  ];

  const javascriptDescription = `JavaScript is a high-level, dynamic, and interpreted programming language that is widely used for creating interactive web pages and web applications. 
                                 It is a client-side scripting language that runs in web browsers and is used for creating dynamic and responsive user interfaces. 
                                 JavaScript can also be used for server-side programming with platforms such as Node.js. 
                                 It has become one of the most popular programming languages in the world due to its flexibility, ease of use, and extensive community support.`;
  const titleStyles = {
    fontWeight: 'bold',
  };

  return (
    <Container fluid style={styles}>
      <div className='d-block'>
        <h1 style={titleStyles}>{title}</h1>
        <p>{description}</p>
        <p>Lecturer : {lecturer}</p>
        <p>Created At : {CreatedAt}</p>
        <p>Language : {language}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <Table striped bordered hover variant="light" className='mt-5 me-5'>
          <thead>
            <tr>
              <th>Chapter Name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {courseContents.map((content, index) => (
              <tr key={index}>
                <td>{content.name}</td>
                <td>{content.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card style={{ width: '18rem', marginRight: '2rem', marginTop: '-100px' }}>
          <Card.Img variant="top" src={videoImage} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>Java</Card.Title>
            <Card.Text style={{ color: 'black' }}>
              This is an example video description.
            </Card.Text>
            <Card.Text style={{ color: 'red' }}>
              $60
            </Card.Text>
            <div className="mt-auto">
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <h2 style={{ color: 'black', titleStyles }}>JavaScript</h2>
      <p style={{ color: 'black' }}>{javascriptDescription}</p>
      <br></br>
    </Container>
  );
};

export default ViewCourseDetails;