import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const CourseList = () => {
    const courses = [
        {
            sl: '1',
            title: 'Email ettiquette',
            status: 'Active',
            created: '14-02-23',
            updated: '15-02-23',
            contents: '3'
        },
        {
            sl: '2',
            title: 'React Js',
            status: 'Inactive',
            created: '11-01-23',
            updated: '15-02-23',
            contents: '6'
        },
        {
            sl: '3',
            title: 'Php full course',
            status: 'Active',
            created: '12-02-23',
            updated: '10-02-23',
            contents: '10'
        }
    ];

    return (
        <div className='container text-center'>
            <div>
                <div className='card'>
                    <div>
                        <h2>Course List</h2>
                    </div>
                    <div className='card-body'>
                        <div className='btn'>
                            <Link to='' className='btn btn-primary'>
                                Add New +
                            </Link>
                        </div>
                        <Table striped bordered hover size='sm'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>Sl.no</td>
                                    <td>Course title</td>
                                    <td>Course status</td>
                                    <td>Created on</td>
                                    <td>Updated on</td>
                                    <td>No: of contents</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((i) => (
                                    <tr>
                                        <td>{i.sl}</td>
                                        <td>{i.title}</td>
                                        <td>{i.status}</td>
                                        <td>{i.created}</td>
                                        <td>{i.updated}</td>
                                        <td>{i.contents}</td>
                                        <td>
                                            <Button variant='warning'>
                                                <i className='fa-solid fa-pen-to-square'></i>
                                            </Button>{' '}
                                            <Button variant='danger'>
                                                <i className='fa-solid fa-trash'></i>
                                            </Button>{' '}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseList;
