import React from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Registration() {

  function registration(data) {

  }

  const schema = yup.object().shape({
    name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Name field cannot be empty*"),
    email: yup.string().required("Email is required*").matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email must be valid'),
    mobile: yup.string().required("Mobile is required*").min(10,'Mobile number must be 10 digits').max(10,'Mobile number must be 10 digits').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'Enter valid mobile number'),
    password: yup.string().required("Password cannot be empty*").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Minimum eight characters, at least one letter and one number'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],"Passwords doesn't match").required("Confirm password cannot be empty*")
  });

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <div id="registration">
      <div className="row height-100" id="student-registration">
        <div className="col-sm-6" id="student-cover"></div>
        <div className="col-sm-4 offset-sm-1">
          <div className="ms-3 me-3">
            <form onSubmit={handleSubmit(registration)}>
              <div className="mb-3">
                <h2 className="text-center text-secondary mt-5">Register</h2>
              </div>
              <div className="mb-3">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" {...register("name")} />
                {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
              </div>
              <div className="mb-3">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" {...register("email")} />
                {errors.email ? <span className="text-danger">{errors.email.message}</span> : null}
              </div>
              <div className="mb-3">
                <label htmlFor="">Mobile</label>
                <input type="text" className="form-control" {...register("mobile")} />
                {errors.mobile ? <span className="text-danger">{errors.mobile.message}</span> : null}
              </div>
              <div className="mb-3">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" {...register("password")} />
                {errors.password ? <span className="text-danger">{errors.password.message}</span> : null}
              </div>
              <div className="mb-3">
                <label htmlFor="">Confirm Password</label>
                <input type="password" className="form-control" {...register("confirmPassword")} />
                {errors.confirmPassword ? <span className="text-danger">{errors.confirmPassword.message}</span> : null}
              </div>
              <div className="d-grid mt-3">
                <button className="btn btn-primary" id="registerButton">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}