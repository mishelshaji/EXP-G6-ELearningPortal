import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Table, Modal, Button } from 'react-bootstrap';
import Axios from '../../services/axios';

const CourseList = () => {
	const [error, setError] = useState('');
	const [courses, setCourses] = useState([]);
	const [show, setShow] = useState(false);
	const [updateData, setUpdateData] = useState(true);
	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => setShow(true);

	useEffect(() => {
		Axios.get('/instructor/courses/all')
			.then((courses) => {
				setCourses(courses.data);
			})
			.catch((error) => {
				if (error.response.status === 404) {
					setError('No course found');
				}
			});
	}, [updateData]);

	async function sendRequest(courseId) {
		try {
			await Axios.get(`instructor/course/contents/${courseId}`);
		} catch (err) {
			if (!err.response.data) {
				handleShow();
				return;
			}
		}
		try {
			await Axios.put(
				`/instructor/courses/status/${courseId}`,
				{
					status: 2
				}
			);
			setUpdateData(!updateData);
		} catch (err) {
			setError(err.response.data)
		}
	}

	return (
		<Col sm={9} md={10} className='mx-auto mt-4'>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Cannot send request</Modal.Title>
				</Modal.Header>
				<Modal.Body>Add atleast one content to course.</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
			<div className='container text-center'>
				<div>
					<div className='card'>
						<div className='card-body'>
							<div>
								<h3>Course List</h3>
							</div>
							<div className='d-flex'>
								<Link
									to='/instructor/create'
									className='btn btn-primary ms-auto mb-3'
								>
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
										<td>Contents</td>
										<td>Action</td>
									</tr>
								</thead>
								<tbody>
									{error ? (
										<span className='d-block text-danger text-center'>
											{error}
										</span>
									) : null}
									{courses.map((i, index) => (
										<tr key={i.id}>
											<td>{index + 1}</td>
											<td>
												<Link
													to={`/instructor/course/?id=${i.id}`}
												>
													{i.title}
												</Link>
											</td>
											<td>
												{i.status === 0 ? <span className='text-warning'>Drafted</span> : ''}
												{i.status === 1 ? <span className='text-success'>Active</span> : ''}
												{i.status === 2 ? <span className='text-primary'>Requested</span> : ''}
												{i.status === 3 ? <span className='text-danger'>Rejected</span> : ''}
											</td>
											<td>
												{new Date(
													i.createdAt.slice(0, 10)
												).toLocaleDateString()}
											</td>
											<td>
												{new Date(
													i.updatedAt.slice(0, 10)
												).toLocaleDateString()}
											</td>
											<td>
												<Link
													to={`/instructor/content/?c=${i.id}&n=${i.title}`}
													variant='primary'
												>
													<i className='fa-solid fa-plus'></i>
												</Link>
											</td>
											<td>
												{i.status === 0 ? (
													<Button variant='primary' onClick={() => sendRequest(i.id)}>
														Send Request
													</Button>
												) : null}
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
