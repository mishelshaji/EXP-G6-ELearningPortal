import React from 'react';

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
                                <a className='nav-link text-white' href='home'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item mx-2'>
                                <a
                                    className='nav-link text-white'
                                    href='contact'
                                >
                                    Contact
                                </a>
                            </li>
                            <li className='nav-item mx-2'>
                                <a className='nav-link text-white' href='about'>
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;