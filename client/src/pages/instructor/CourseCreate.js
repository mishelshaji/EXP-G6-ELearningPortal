import React from "react";
import { Link } from 'react-router-dom'

const CourseCreate = () => {
	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<h1>Course Creation</h1>
			<div className="p-4" style={{ backgroundColor: 'rgb(76, 160, 225)' }}>
				<div className="row">
					<div className="offset-lg-3 col-lg-6">
						<form className="container" >
							<div className="card" style={{ "textAlign": "left" }}>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label>Course Title</label>
												<input className="form-control"></input>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Meta Description</label>
												<input className="form-control">
												</input>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Level</label>
												<select className="form-control">
													<option value="Begginer">Beginner</option>
													<option value="Intermediate">Intermediate</option>
													<option value="Advance">Advanced</option>
												</select>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Price</label>
												<input className="form-control"></input>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Featured Image Url</label>
												<input className="form-control"></input>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Language</label>
												<input className="form-control"></input>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label>Detailed Description</label>
												<input className="form-control"></input>
											</div>
										</div>
									</div>
									<br></br>
									<div className="col-lg-12">
										<div className="form-group">
											<Link to="/instructor/continue">
												<button className="btn btn-primary ms-2" type="submit">Continue</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseCreate;