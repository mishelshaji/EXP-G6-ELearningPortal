import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCard from '../../components/CourseCard';
import SearchBox from '../../components/SearchBox';
import Axios from "../../services/axios";

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

export default function CourseSearch() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const searchKey = urlParams.get('key');
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState(searchKey);

  useEffect(() => {
    (async function fetchCourses() {
      try {
        const allCourses = await Axios.get(`/courses/search/${search}`);
        setCourses(allCourses.data);
      } catch (err) {
        const error = err.response.data;
        if (error.Error) {
          setError(error.errors.Error);
        }
      }
    })();
  }, [search]);

  const allCourses = displayAllCourses(courses);

  return (
    <div>
      <SearchBox setSearch={setSearch} />
      {error && <span className='text-danger d-block text-center'>{error}</span>}
      <div className='mt-5 bg-light d-flex justify-content-center'>
        <Row className='g-0 p-4 container'>
          {allCourses}
        </Row>
      </div>
    </div>
  )
}