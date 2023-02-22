import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Axios from '../../services/axios';
import { Link } from 'react-router-dom';

function RequestTable() {
	const [error, setError] = useState('');
	const [courses, setCourses] = useState([]);
	const [updateData, setUpdateData] = useState(true);

	useEffect(() => {
		Axios.get('/admin/courses/inactive')
			.then((courses) => {
				setCourses(courses.data);
			})
			.catch((error) => {
				if (error.response.status === 404) {
					setCourses([]);
					setError('No course found');
				}
			});
	}, [updateData]);

	async function approveRequest(courseId) {
		const confirm = window.confirm('Accept course?');
		if (confirm === true) {
			try {
				await Axios.put(
					`/admin/courses/status/${courseId}`,
					{
						status: 1
					}
				);
				setUpdateData(!updateData);
			} catch (err) {
				setError(err.response.data)
			}
		}
	}

	async function removeRequest(courseId) {
		const confirm = window.confirm('Do you want to delete this course?');
		if (confirm === true) {
			try {
				await Axios.delete(
					`/admin/courses/${courseId}`,
				);
				setUpdateData(!updateData);
			} catch (err) {
				setError(err.response.data)
			}
		}
	}

	async function rejectRequest(courseId) {
		const confirm = window.confirm('Do you want to reject this course?');
		if (confirm === true) {
			try {
				await Axios.put(
					`/admin/courses/status/${courseId}`,
					{
						status: 3
					}
				);
				setUpdateData(!updateData);
			} catch (err) {
				setError(err.response.data)
			}
		}
	}

	return (
		<div>
			<div className='content container mt-3'>
				<Button
					className='float-end'
					variant='white'
					onClick={() => setUpdateData(!updateData)}
				>
					<i className='fa-solid fa-arrows-rotate'></i>
				</Button>
				<Table striped bordered hover size='sm'>
					<thead className='bg-dark text-white'>
						<tr>
							<td>Course id</td>
							<td>Course title</td>
							<td>Created on</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{courses.map((i) => (
							<tr key={i.id}>
								<td>{i.id}</td>
								<td>
									<Link>{i.title}</Link>
								</td>
								<td>{i.createdAt.slice(0, 10)}</td>
								<td>
									<Button
										variant='success'
										className='me-2'
										title='Approve'
										onClick={(e) => {
											approveRequest(i.id);
										}}
									>
										<i className='fa-solid fa-check'></i>
									</Button>
									<Button
										variant='danger'
										className='me-2'
										title='Delete'
										onClick={(e) => {
											removeRequest(i.id);
										}}
									>
										<i className='fa-solid fa-trash'></i>
									</Button>
									<Button
										variant='secondary'
										className='me-2'
										title='Reject'
										onClick={(e) => {
											rejectRequest(i.id);
										}}
									>
										<i className='fa-solid fa-xmark'></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				{error ? (
					<span className='d-block text-danger text-center'>
						{error}
					</span>
				) : null}
			</div>
		</div>
	);
}

export default RequestTable;
