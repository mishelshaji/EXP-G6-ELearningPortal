import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Table } from 'react-bootstrap';
import Axios from "../../services/axios";

const CourseList = () => {
	const [error, setError] = useState('');
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		Axios.get('/instructor/courses/all').then((courses) => {
			setCourses(courses.data);
		}).catch((error) => {
			if (error.response.status === 404) {
				setError('No course found')
			}
		})
	})
	// 	{
	// 		sl: '1',
	// 		title: 'Email ettiquette',
	// 		status: 'Active',
	// 		created: '14-02-23',
	// 		updated: '15-02-23',
	// 		contents: '3'
	// 	},
	// 	{
	// 		sl: '2',
	// 		title: 'React Js',
	// 		status: 'Inactive',
	// 		created: '11-01-23',
	// 		updated: '15-02-23',
	// 		contents: '6'
	// 	},
	// 	{
	// 		sl: '3',
	// 		title: 'Php full course',
	// 		status: 'Active',
	// 		created: '12-02-23',
	// 		updated: '10-02-23',
	// 		contents: '10'
	// 	}
	// ];

	return (
		<Col sm={9} md={10} className='mx-auto mt-4'>
			<div className='container text-center'>
				<div>
					<div className='card'>
						<div className='card-body'>
							<div>
								<h3>Course List</h3>
							</div>
							<div className='d-flex'>
								<Link to='/instructor/create' className='btn btn-primary ms-auto mb-3'>
									Add New +
								</Link>
							</div>
							<Table striped bordered hover size='sm'>
								<thead className='bg-dark text-white'>
									<tr>
										<td>Course id</td>
										<td>Course title</td>
										<td>Course status</td>
										<td>Created on</td>
										<td>Updated on</td>
										<td>Action</td>
									</tr>
								</thead>
								<tbody>
									{error ? (
										<span className='d-block text-danger text-center'>
											{error}
										</span>
									) : null}
									{courses.map((i) => (
										<tr>
											<td>{i.id}</td>
											<td>{i.title}</td>
											<td>{i.status ? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}</td>
											<td>{(i.createdAt).slice(0, 10)}</td>
											<td>{(i.updatedAt).slice(0, 10)}</td>
											<td>
												<Button variant='warning'>
													<i className='fa-solid fa-pen-to-square'></i>
												</Button>
												<Button variant='danger'>
													<i className='fa-solid fa-trash'></i>
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default CourseList;
