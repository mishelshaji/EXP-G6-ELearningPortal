import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CourseCard(props) {
  return (
    <Card style={{ width: props.width }} className="mx-auto">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <span>{props.price}</span>
        <span className='float-end btn btn-outline-secondary' title="Enroll Now"><i class="fa-solid fa-cart-shopping"></i></span>
      </Card.Body>
    </Card>
  )
}
