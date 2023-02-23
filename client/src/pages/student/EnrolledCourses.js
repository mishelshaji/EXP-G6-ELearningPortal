import React, { useEffect, useState } from 'react';
import EnrollCourseCard from '../../components/student/EnrollCourseCard';
import Axios from "../../services/axios";

export default function EnrolledCourses() {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async function fetchCourses() {
            try {
                const allCourses = await Axios.get('/student/enrollments');
                setCourses(allCourses.data);
                console.log(allCourses.data);
            } catch (err) {
                const error = err.response;
                if (!error) {
                    setError('No course found');
                }
                if (error.errors.Error) {
                    setError(error.errors.Error);
                }
            }
        })();
    }, [])

    return (
        <div>
            <div className='container'>
                {error ? <span>{error}</span> : <></>}
                <div className='row'>
                    {courses.map((i, index) => {
                        return <EnrollCourseCard {...i} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}