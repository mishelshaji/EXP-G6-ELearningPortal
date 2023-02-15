import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function CourseRequest() {

	const courses = [
		{
			id: '1',
			course: 'nodejs',
			instructor: 'shameer',
			createdAt: '10-10-2020',
			price: '4000'
		},
		{
			id: '2',
			course: 'reactjs',
			instructor: 'sanjay',
			createdAt: '05-04-2015',
			price: '5500'
		},
		{
			id: '3',
			course: 'angular',
			instructor: 'jijo',
			createdAt: '14-12-2015',
			price: '3000'
		},
	];

	return (
		<div className='container'>
			<p className='mt-3'>Course approval</p>
			<div className="rounded-5 shadow-lg p-4 mb-4 bg-white">
				<Table striped hover responsive >
					<thead>
						<tr className="table-info">
							<th>Course id</th>
							<th>Course</th>
							<th>Instructor</th>
							<th>Created at</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course, index) => (
							<tr key={index}>
								<td>{course.id}</td>
								<td>{course.course}</td>
								<td>{course.instructor}</td>
								<td>{course.createdAt}</td>
								<td>{course.price}</td>
								<td>
									<div className='d-flex'>
										<Button variant='success me-2'>
											<i className="fa-solid fa-check" />
										</Button>
										<Button variant='danger'>
											<i class="fa-solid fa-xmark" />
										</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default CourseRequest;