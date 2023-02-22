import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CourseCard(props) {
  return (
    <Card style={{ width: props.width }} className="mx-auto">
      <Card.Img variant="top" src={`http://localhost/public/${props.featuredImageLink}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.metaDescription}
        </Card.Text>
        <span>{props.price == 0 ? 'Free' : parseFloat(props.price)}</span>
        {props.page === 'student-home' && <span className='float-end btn btn-outline-secondary' title="Enroll Now"><i className="fa-solid fa-bag-shopping"></i></span>}
      </Card.Body>
    </Card>
  )
}
