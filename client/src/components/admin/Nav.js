import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <button
                        className='navbar-toggler'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarm'
                        aria-controls='navbarm'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-md-end'
                        id='navbarm'
                    >
                        <ul className='navbar-nav'>
                            <li className='nav-item mx-2'>
                                <Link className='nav-link text-white' to={'/admin'}>
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;