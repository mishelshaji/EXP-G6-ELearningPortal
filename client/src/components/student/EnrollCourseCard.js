import React from 'react';
import { Button } from 'react-bootstrap';

function EnrollCourseCard(props) {
    return (
        <div className='col-md-10 offset-md-1 mt-5 mb-3 '>
            <div className='shadow-lg p-3 rounded'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img
                            src={props.img}
                            alt={props.title}
                            className='img-thumbnail'
                        />
                    </div>
                    <div className='col-md-8'>
                        <div>
                            <h5>{props.title}</h5>
                            <h6 className='mb-2 text-muted'>{props.level}</h6>
                            <p>{props.discription}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p>Date of Enrolled: {props.date}</p>
                    <Button variant='info'>View the course</Button>
                </div>
            </div>
        </div>
    );
}

export default EnrollCourseCard;