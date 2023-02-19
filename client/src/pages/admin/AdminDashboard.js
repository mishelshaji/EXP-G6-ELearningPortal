import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/AdminDashboard.css';
import Nav from '../admin/Nav';
import Button from 'react-bootstrap/Button';

function AdminDashboard() {
    return (
        <div>
            <div className='header'></div>
            <div className='home-content'>
                <div className='header'>
                    <div className='d-flex justify-content-around '></div>
                    <Nav />
                </div>
                <div className='d-flex home-content'>
                    <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
                        <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
                            <li className='nav-item '>
                                <a
                                    href='dashboard'
                                    className='nav-link text-white active'
                                >
                                    <i className='fas fa-fw fa-tachome-contentter-alt'></i>
                                    <span className='ms-2'>Dashboard</span>
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='profile'
                                    className='nav-link text-white'
                                >
                                    <i class='fas fa-user-alt'></i>
                                    <span className='ms-2'>My profile</span>
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='student'
                                    className='nav-link text-white'
                                >
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='category'
                                    className='nav-link text-white'
                                >
                                    <i class='fas fa-tasks'></i>
                                    <span className='ms-2'>
                                        Category management
                                    </span>
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='instructor'
                                    className='nav-link text-white'
                                >
                                    <i class='fas fa-chalkboard-teacher'></i>
                                    <span className='ms-2'>
                                        Instructor management
                                    </span>
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='feedbacks'
                                    className='nav-link text-white'
                                >
                                    <i class='fas fa-comments'></i>
                                    <span className='ms-2'>
                                        Feedback management
                                    </span>
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    href='logout'
                                    className='nav-link text-white'
                                >
                                    <i class='fas fa-sign-out'></i>{' '}
                                    <span className='ms-2'>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='content container mt-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        TOTAL COURSES
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        40+
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-book fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        TOTAL STUDENTS
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        100+
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-users fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        TOTAL COURSE PURCHASE
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        20+
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-shopping-cart fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        ADD COURSE CATEGORY
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        <Button variant='success'>
                                                            Add+
                                                        </Button>{' '}
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-plus fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        VIEW COURSE REQUEST
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        <Button variant='primary'>
                                                            View
                                                        </Button>{' '}
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-eye fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6 mb-4'>
                                    <div className='card border-left-primary shadow h-100 py-2'>
                                        <div className='card-body'>
                                            <div className='row no-gutters align-items-center'>
                                                <div className='col mr-2'>
                                                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                                                        TOTAL PAYMENT
                                                    </div>
                                                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                        <Button variant='primary'>
                                                            View
                                                        </Button>{' '}
                                                    </div>
                                                </div>
                                                <div className='col-auto'>
                                                    <i className='fas fa-wallet fa-2x text-gray-300'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;