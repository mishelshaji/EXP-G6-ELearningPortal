import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCard from '../../components/CourseCard';
import SearchBox from '../../components/SearchBox';

const data = [
  {
    id: "1",
    price: "₹2000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g"
  },
  {
    id: "2",
    price: "₹3000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g"
  },
  {
    id: "3",
    price: "₹1000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/Crk_5Xy8GMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQqOTomt0B9tlBPLhjBumP1fhqhg"
  },
  {
    id: "4",
    price: "₹4000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g"
  },
  {
    id: "5",
    price: "₹4000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZPkKQpUKwyYqCNt5BSBS4S37Vmg"
  },
  {
    id: "6",
    price: "₹4000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg"
  },
  {
    id: "6",
    price: "₹4000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title",
    image: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg"
  },
  {
    id: "6",
    price: "₹4000",
    title: "Nodejs",
    description: "Some quick example text to build on the card title ",
    image: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg"
  }
];

function displayAllCourses(courseList) {
  return (
    courseList.map((i, index) => {
      return (
        <Col key={index} md={3} lg={3} className="mb-4">
          <CourseCard {...i} width="15rem" />
        </Col>
      )
    })
  );
}

const allCourses = displayAllCourses(data);

export default function CourseSearch() {
  return (
    <div>
      <SearchBox />
      <div className='mt-5 bg-light d-flex justify-content-center'>
        <Row className='g-0 p-4 container'>
          {allCourses}
        </Row>
      </div>
    </div>
  )
}