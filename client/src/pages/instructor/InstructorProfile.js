import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from '../../images/instructor-profile.jpg';

export default function InstructorProfile() {
    const data = {
        name: 'Dixton ',
        email: 'dixtondior@gmail.com',
        mobile: 9784768605,
        yearOfExperience: 7,
        education: 'phd,m.tech',
        dob: '12/03/1990',
        areaOfExpertise: 'programming',
        img: `${Profile}`
    };

    return (
        <div className='col-md-10 offset-md-1 ms-4 '>
            <div className='col-lg-7'>
                <p className='mb-3 fs-2 p-4 mb-2 '>Profile</p>
            </div>
            <div className ='instructor-profile'>
                <div className='d-flex flex-cols  ms-5 col-md-8' >
                    <div className='shadow-lg p-4 rounded col-md- mb-4 mt-4 ms-3'>
                        <div className=" col-md-6 offset-md-3 mb-7 mt-7 ">
                            <img src={data.img} alt='could not load' className='img-thumbnail' />
                            <p className='mb-0 col-md-3 offset-md-3 '>
                                Name
                            </p>
                            <div className='col-sm-9 '>
                                <p className='text-muted mb-0 col-md-4 offset-md-4 '>
                                    {data.name}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className='row mt-4'>
                            <div className='col-sm-3 '>
                                <p className='mb-0'>Email</p>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>
                                    {data.email}
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <p className='mb-0'>Mobile</p>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>
                                    {data.mobile}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg p-4 rounded col-md-6 ms-3 me-3 mt-4 mb-4'>
                        <div className='card-body mb-2 '>
                            <div className='row'>
                                <p className='fs-4'>Educational Details -</p>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <p className='mb-0'>Education</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-3'>
                                            {data.education}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className='col-sm-3'>
                                    <p className='mb-0'>Year of experience</p>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {data.yearOfExperience}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <p className='mb-0'>Dob</p>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {data.dob}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <p className='mb-0'>Area of expertise</p>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {data.areaOfExpertise}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className='row p-2 mt-2 col-sm-6 offset-sm-3'>
                                <Button>Update Profile</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}