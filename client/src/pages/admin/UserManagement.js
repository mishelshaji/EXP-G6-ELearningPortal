import React from 'react';
import { Button, Table } from 'react-bootstrap';

export default function UserManagement() {
    const user = [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            role: 'Instructor',
            date: '17-06-2022'
        },
        {
            id: 2,
            name: 'Joy',
            email: 'joy@gmail.com',
            role: 'Student',
            date: '19-03-2022'
        },
        {
            id: 3,
            name: 'Haris',
            email: 'haris@gmail.com',
            role: 'Student',
            date: '22-09-2021'
        },
        {
            id: 4,
            name: 'Jomiya',
            email: 'jomiya@gmail.com',
            role: 'Student',
            date: '10-09-2021'
        },
        {
            id: 5,
            name: 'Maya',
            email: 'maya@gmail.com',
            role: 'Instructor',
            date: '06-12-2021'
        },
        {
            id: 6,
            name: 'Leya',
            email: 'leya@gmail.com',
            role: 'Student',
            date: '11-05-2020'
        },
        {
            id: 7,
            name: 'Haritha',
            email: 'haritha@gmail.com',
            role: 'Student',
            date: '09-10-2020'
        },
        {
            id: 8,
            name: 'Nimmi',
            email: 'nimmi@gmail.com',
            role: 'Instructor',
            date: '15-12-2021'
        }
    ];
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-1 mt-4'>
                        <p className='fs-4'>User Management</p>
                        <div className='input-group md-form form-sm form-1 pl-0'>
                            <div className='input-group-prepend'></div>
                            <input
                                className='form-control my-0 py-1'
                                type='text'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <span
                                className='input-group-text purple lighten-3'
                                id='basic-text'
                            >
                                <Button variant=''>
                                    <i className='fa-solid fa-search'></i>
                                </Button>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='col-lg-10 offset-md-1 mt-4'>
                            <Table className='table table-striped d'>
                                <thead className='bg-info'>
                                    <tr>
                                        <th scope='col'>Id</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Role</th>
                                        <th scope='col'>Date of join</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((users) => {
                                        return (
                                            <tr>
                                                <td>{users.id}</td>
                                                <td>{users.name}</td>
                                                <td>{users.email}</td>
                                                <td>{users.role}</td>
                                                <td>{users.date}</td>
                                                <td>
                                                    <div className='d-flex justify-content-around'>
                                                        <Button variant='danger'>
                                                            <i className='fa-solid fa-trash'></i>
                                                        </Button>
                                                        <Button variant='warning'>
                                                            <i className='fa-solid fa-eye'></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
