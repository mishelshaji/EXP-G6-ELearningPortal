import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

function SideNavigationBar() {
    return (
        <div className='d-flex sidebar flex-column flex-shrink-0  bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0 mt-3'>
                <li className='nav-item '>
                    <Link
                        to={'/admin/home'}
                        className='nav-link text-white active'
                    >
                        <i className="fas fa-tachometer-alt"></i>
                        <span className='ms-2'>Dashboard</span>
                    </Link>
                </li>
                <li className='nav-item '>
                    <Link
                        className='nav-link text-white'
                    >
                    </Link>
                </li>
                <li className='nav-item '>
                    <Link
                        className='nav-link text-white'
                    >
                        <i className='fas fa-tasks'></i>
                        <span className='ms-2'>
                            Category management
                        </span>
                    </Link>
                </li>
                <li className='nav-item '>
                    <Link
                        className='nav-link text-white'
                    >
                        <i className='fas fa-chalkboard-teacher'></i>
                        <span className='ms-2'>
                            Instructor management
                        </span>
                    </Link>
                </li>
                <li className='nav-item '>
                    <LogoutButton/>
                </li>
            </ul>
        </div>
    )
}

export default SideNavigationBar