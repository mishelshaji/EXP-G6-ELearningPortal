import React from 'react';
import '../../assets/style.css';
import { Col } from 'react-bootstrap';

export default function CourseContent() {
    return (
        <>
            <Col sm={9} md={10} className='mx-auto mt-4'>
                <div className='cols fluid' style={{ height: '100vh' }}>
                    <div className='offset-lg-3 col-lg-6 mt-5'>
                        <div className='container'>
                            <div className='card' style={{ textAlign: 'left' }}>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h1 style={{ color: 'blue' }}>
                                                Course Content
                                            </h1>
                                            <div className='form-group'>
                                                <label>Title</label>
                                                <input className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Description</label>
                                                <input className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Duration</label>
                                                <input className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <label>Video Link</label>
                                                <input className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='form-group'>
                                                <button
                                                    className='btn btn-info md-6 offset-md-5 mt-4'
                                                    type='submit'
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}
