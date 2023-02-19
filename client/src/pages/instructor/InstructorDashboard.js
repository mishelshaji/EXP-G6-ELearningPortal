import React from 'react';
import {
	Row,
	Col,
	Button,
	Table,
	Card,
} from 'react-bootstrap';

function InstructorDashboard() {
	return (
		<>
			<Col sm={9} md={10} className="mx-auto mt-4">
				<div>
					<Row>
						<Col md={3}>
							<Card className='shadow bg-body-tertiary rounded'>
								<Card.Body>
									<Card.Title>My Courses</Card.Title>
									<Card.Text>
										<h2>50</h2>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button variant="primary">View Courses</Button>
								</Card.Footer>
							</Card>
						</Col>
						<Col md={3}>
							<Card className='shadow bg-body-tertiary rounded'>
								<Card.Body>
									<Card.Title>Students</Card.Title>
									<Card.Text>
										<h2>200</h2>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button variant="primary">View Students</Button>
								</Card.Footer>
							</Card>
						</Col>
						<Col md={3}>
							<Card className='shadow bg-body-tertiary rounded'>
								<Card.Body>
									<Card.Title>Active Courses</Card.Title>
									<Card.Text>
										<h2>20</h2>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button variant="primary">View All</Button>
								</Card.Footer>
							</Card>
						</Col>
						<Col md={3}>
							<Card className='shadow bg-body-tertiary rounded'>
								<Card.Body>
									<Card.Title>Feedback</Card.Title>
									<Card.Text>
										<h2>20</h2>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button variant="primary">View Feedback</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
					<p className='mt-5 fs-4'>Popular Courses</p>
					<Table striped hover responsive>
						<thead className='bg-dark text-white'>
							<tr>
								<th>SI.No</th>
								<th>Course</th>
								<th>No. of Contents</th>
								<th>No. of Students Enrolled</th>
								<th>Created At</th>
								<th>Updated At</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>React for Beginners</td>
								<td>12</td>
								<td>100</td>
								<td>2022-02-01</td>
								<td>2022-02-10</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Node.js Essentials</td>
								<td>8</td>
								<td>150</td>
								<td>2022-01-01</td>
								<td>2022-01-31</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Python Fundamentals</td>
								<td>15</td>
								<td>150</td>
								<td>2022-02-01</td>
								<td>2022-02-10</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Python Fundamentals</td>
								<td>15</td>
								<td>150</td>
								<td>2022-02-01</td>
								<td>2022-02-10</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Python Fundamentals</td>
								<td>15</td>
								<td>150</td>
								<td>2022-02-01</td>
								<td>2022-02-10</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</Col>
		</>
	);
}

export default InstructorDashboard;