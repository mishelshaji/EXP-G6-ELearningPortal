import React from 'react';
import { Link } from 'react-router-dom';

function EnrollCourseCard(props) {
    return (
        <div className='col-md-10 offset-md-1 mt-5 mb-3 '>
            <div className='shadow-lg p-3 rounded'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img
                            src={`http://localhost:80/public/${props.featured_image_link}`}
                            alt={props.title}
                            className='img-thumbnail'
                        />
                    </div>
                    <div className='col-md-8'>
                        <div>
                            <h5>{props.title}</h5>
                            <h6 className='mb-2 text-muted'>{props.level}</h6>
                            <p>{props.meta_description}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p>Date of Enrolled: {props.createdAt.slice(0, 10)}</p>
                    <Link to={`/student/course-view/${props.id}`} className='btn btn-info'>View the course</Link>
                </div>
            </div>
        </div>
    );
}

export default EnrollCourseCard;