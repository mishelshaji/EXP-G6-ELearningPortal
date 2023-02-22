import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Axios from "../services/axios";

export default function Home(params) {

  const [courses, setCourses] = useState([]);
  const [allFree, setFreeCourses] = useState([]);

  useEffect(() => {
		(async function fetchCourses() {
      try {
      const allCourses = await Axios.get('/courses');
      setCourses(allCourses.data);
      const freeCourses = await Axios.get('/courses/free')
      setFreeCourses(freeCourses.data);
      } catch (err) {
        console.log(err);
      }
    })();
	}, [])
  // const data = [
  //   {
  //     id: '1',
  //     price: '₹2000',
  //     title: 'Nodejs',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g'
  //   },
  //   {
  //     id: '2',
  //     price: '₹3000',
  //     title: 'Nodejs',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g'
  //   },
  //   {
  //     id: '3',
  //     price: '₹1000',
  //     title: 'Nodejs',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/Crk_5Xy8GMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQqOTomt0B9tlBPLhjBumP1fhqhg'
  //   },
  //   {
  //     id: '4',
  //     price: '₹4000',
  //     title: 'Nodejs',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g'
  //   },
  //   {
  //     id: '5',
  //     price: '₹4000',
  //     title: 'React',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZPkKQpUKwyYqCNt5BSBS4S37Vmg'
  //   },
  //   {
  //     id: '6',
  //     price: '₹4000',
  //     title: 'Nodejs',
  //     description:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     image:
  //       'https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg'
  //   }
  // ];

  function displayCourses(courseList) {
    return courseList.map((i, index) => {
      return (
        <Col key={index} md={6} lg={4} className='mb-4'>
          <CourseCard {...i} page={params.page} />
        </Col>
      );
    });
  }

  let navigate = useNavigate();

  function searchCourse(data) {
    if (params.page === 'landing') {
      let path = `/search/${data.searchKey}`;
      navigate(path);
    } else {
      let path = `/student/search/${data.searchKey}`;
      navigate(path);
    }
  }

  const schema = yup.object().shape({
    searchKey: yup.string().required('Input course name to search!')
  });

  const latestCourses = displayCourses(courses);
  const freeCourses = displayCourses(allFree);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <div>
      <div className='text-center text-white ff-rubik' id='home-introduction'>
        <p className='display-6'>
          Grow Your Skills to <br /> Advance Your Career Path
        </p>
        <div className='mt-5' id='search-box'>
          <form onSubmit={handleSubmit(searchCourse)}>
            <input
              type='search'
              className='form-input p-3'
              placeholder='Search For...'
              {...register('searchKey')}
            />
            <button type='submit' className='btn btn-primary ms-2'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </form>
          {errors.searchKey ? (
            <small className='me-auto text-danger'>
              {errors.searchKey.message}
            </small>
          ) : null}
        </div>
      </div>
      <div className='bg-light'>
        <p className='fs-3 text-center pt-3'>Latest Courses</p>
        <Container>
          <Row className='justify-content-between'>{latestCourses}</Row>
        </Container>
      </div>
      <p className='fs-3 text-center mt-3'>Free Courses </p>
      <Container>
        <Row className='justify-content-between'>{freeCourses}</Row>
      </Container>
    </div>
  );
}