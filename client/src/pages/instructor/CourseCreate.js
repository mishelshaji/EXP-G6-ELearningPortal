import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Axios from "../../services/axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Spinner, Button, Col } from 'react-bootstrap';

const CourseCreate = () => {

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [file, setFile] = useState(null);
	const [categories, setCategories] = useState([]);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		Axios.get('/instructor/categories').then((categories) => {
			setCategories(categories.data);
		})
	}, [])

	async function createCourse(data) {
		const formData = new FormData();
		formData.append('courseImage', file)
		formData.append('title', data.title);
		formData.append('metaDescription', data.metaDescription);
		formData.append('price', data.price);
		formData.append('level', data.level);
		formData.append('category', data.category);
		formData.append('language', data.language);
		formData.append('detailedDescription', data.detailedDescription)

		setLoading(true);
		try {
			await Axios.post(
				'/instructor/courses',
				formData
			);
			handleShow();
		} catch (err) {
			const error = err.response.data.errors;
			setError(err.response.data.errors.Error);
			console.log(error.Error);
		}
		setLoading(false);
	}

	const schema = yup.object().shape({
		title: yup
			.string()
			.required('Title cannot be empty*'),
		metaDescription: yup
			.string()
			.required('Meta description cannot be empty*'),
		level: yup
			.number().integer().positive()
			.required('Level cannot be empty*'),
		category: yup
			.number().integer().positive('Choose category')
			.required('Category cannot be empty*'),
		price: yup
			.number()
			.required('Price cannot be empty*')
			.typeError('Enter a valid amount')
			.test('is-number', 'Enter a valid amount', (value) => !isNaN(value)),
		language: yup
			.string()
			.required('Language cannot be empty*'),
		detailedDescription: yup
			.string()
			.required('Detailed description cannot be empty*')
	});

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});

	return (
		<Col sm={9} md={10} className='mx-auto mt-4'>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Course creation request sent.</Modal.Title>
				</Modal.Header>
				<Modal.Body>Course will be available to public after approval of admin.</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="text-center">
				<h3>Course Creation</h3>
				{error ? (
					<span className='d-block text-danger text-center'>
						{error}
					</span>
				) : null}
				<div className="p-4">
					<div className="row">
						<div className="offset-lg-3 col-lg-6">
							<form className="container" encType="multipart/form-data" onSubmit={handleSubmit(createCourse)}>
								<div className="card" style={{ "textAlign": "left" }}>
									<div className="card-body">
										<div className="row">
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Course Title</label>
													<input type='text' className="form-control" {...register('title')}></input>
													{errors.title ? (
														<span className='text-danger'>
															{errors.title.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Meta Description</label>
													<input type='text' className="form-control" {...register('metaDescription')}>
													</input>
													{errors.metaDescription ? (
														<span className='text-danger'>
															{errors.metaDescription.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Level</label>
													<select className="form-control" {...register('level')}>
														<option value='1'>Beginner</option>
														<option value='2'>Intermediate</option>
														<option value='3'>Advanced</option>
													</select>
													{errors.level ? (
														<span className='text-danger'>
															{errors.level.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Category</label>
													<select className="form-control" {...register('category')}>
														<option value={0}>Choose category</option>
														{
															categories.map((category) => {
																return (<option key={category.id} value={category.id}>{category.category}</option>);
															})
														}
													</select>
													{errors.category ? (
														<span className='text-danger'>
															{errors.category.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Price</label>
													<input type='number' className="form-control" {...register('price')}></input>
													{errors.price ? (
														<span className='text-danger'>
															{errors.price.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Language</label>
													<select className="form-control" {...register('language')}>
														<option value='English'>English</option>
														<option value='Malayalam'>Malayalam</option>
														<option value='Hindi'>Hindi</option>
														<option value='Tamil'>Tamil</option>
													</select>
													{errors.language ? (
														<span className='text-danger'>
															{errors.language.message}
														</span>
													) : null}
												</div>
											</div>
											<div className="col-lg-12 mb-3">
												<div className="form-group">
													<label>Detailed Description</label>
													<input type='text' className="form-control" {...register('detailedDescription')}></input>
													{errors.detailedDescription ? (
														<span className='text-danger'>
															{errors.detailedDescription.message}
														</span>
													) : null}
												</div>
											</div>
										</div>
										<div className="col-lg-12 mb-3">
											<div className="form-group">
												<label>Featured Image</label>
												<input type='file' className="form-control" onChange={(e) => setFile(e.target.files[0])}></input>
											</div>
										</div>
										<div className="col-lg-12 mb-3 mt-4">
											<div className="d-grid">
												<button className="btn btn-primary" type="submit">
													{loading && (
														<Spinner
															animation='border'
															role='status'
															className='d-block mx-auto'
														>
															<span className='visually-hidden'>Loading...</span>
														</Spinner>
													)}
													Submit
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
}

export default CourseCreate;