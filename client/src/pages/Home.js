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
  const [error, setError] = useState('');

  useEffect(() => {
    (async function fetchCourses() {
      try {
        const allCourses = await Axios.get('/courses');
        setCourses(allCourses.data);
        const freeCourses = await Axios.get('/courses/free')
        setFreeCourses(freeCourses.data);
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
  }, [])

  function displayCourses(courseList) {
    const result = [];
    courseList.forEach((i, index) => {
      result.push(
        <Col key={index} md={6} lg={4} className='mb-4'>
          <CourseCard {...i} page={params.page} />
        </Col>
      );
    });
    return result;
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
        {error ? (
          <span className='d-block text-danger text-center'>
            {error}
          </span>
        ) : null}
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