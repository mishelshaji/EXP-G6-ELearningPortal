import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CourseCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="mx-auto">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="success">Enroll Now</Button>
      </Card.Body>
    </Card>
  )
}