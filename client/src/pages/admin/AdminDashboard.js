import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/AdminDashboard.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    return (
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
                        <Link to={'/admin/requests'}>
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
                        </Link>
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
    );
}

export default AdminDashboard;