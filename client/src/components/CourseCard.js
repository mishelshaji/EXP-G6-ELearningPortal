import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CourseCard(props) {

  const courseData = {
    id: props.id,
    title: props.title,
    level: props.level,
    metaDescription: props.metaDescription,
    price: props.price,
    featuredImageLink: props.featuredImageLink
  }

  return (
    <Card style={{ width: props.width }} className="mx-auto">
      <Card.Img variant="top" src={`http://localhost/public/${props.featuredImageLink}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.metaDescription}
        </Card.Text>
        <span>{props.price == 0 ? 'Free' : parseFloat(props.price)}</span>
        {props.page === 'student-home' && <Link to={`/student/order`} state={ courseData } className='float-end btn btn-outline-secondary' title="Enroll Now"><i className="fa-solid fa-bag-shopping"></i></Link>}
      </Card.Body>
    </Card>
  )
}