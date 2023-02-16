import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function InstructorRegistration() {
  function registration(data) {}

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('Name field cannot be empty*'),
    email: yup
      .string()
      .required('Email is required*')
      .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email must be valid'),
    mobile: yup
      .string()
      .required('Mobile is required*')
      .min(10, 'Mobile number must be 10 digits')
      .max(10, 'Mobile number must be 10 digits')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Enter valid mobile number'
      ),
    yearOfExperience: yup.string().required('Field Required*'),
    education: yup.string().required('Field required*'),
    dob: yup.string('Enter valid date of birth').required('Field required*'),
    areaOfExpertise: yup.string().required('Field required*'),
    password: yup
      .string()
      .required('Password cannot be empty*')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Minimum eight characters, at least one letter and one number'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Passwords doesn't match")
      .required('Confirm password cannot be empty*')
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <div id='registration'>
      <div className='row height-200' id='instructor-registration'>
        <div className='col-sm-6' id='instructor-cover'></div>
        <div className='col-sm-4 offset-sm-1'>
          <div className='ms-3 me-3'>
            <form onSubmit={handleSubmit(registration)}>
              <div className='mb-3'>
                <h2 className='text-center text-secondary mt-5'>Register</h2>
              </div>
              <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='form-control'
                  {...register('name')}
                />
                {errors.name ? (
                  <span className='text-danger'>{errors.name.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='form-control'
                  {...register('email')}
                />
                {errors.email ? (
                  <span className='text-danger'>{errors.email.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='mobile'>Mobile</label>
                <input
                  type='text'
                  id='mobile'
                  className='form-control'
                  {...register('mobile')}
                />
                {errors.mobile ? (
                  <span className='text-danger'>{errors.mobile.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='yearOfExperience'>Year of experience</label>
                <input
                  type='number'
                  id='yearOfExperience'
                  className='form-control'
                  {...register('yearOfExperience')}
                />
                {errors.yearOfExperience ? (
                  <span className='text-danger'>
                    {errors.yearOfExperience.message}
                  </span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='education'>Education</label>
                <input
                  type='text'
                  id='education'
                  className='form-control'
                  {...register('education')}
                />
                {errors.education ? (
                  <span className='text-danger'>
                    {errors.education.message}
                  </span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='dob'>Dob</label>
                <input
                  type='date'
                  id='dob'
                  className='form-control'
                  {...register('dob')}
                />
                {errors.dob ? (
                  <span className='text-danger'>{errors.dob.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='areaOfExpertise'>Area of expertise</label>
                <input
                  type='text'
                  id='areaOfExpertise'
                  className='form-control'
                  {...register('areaOfExpertise')}
                />
                {errors.areaOfExpertise ? (
                  <span className='text-danger'>
                    {errors.areaOfExpertise.message}
                  </span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='uploadPhoto'>Upload photo</label>
                <input
                  type='file'
                  id='uploadPhoto'
                  className='form-control'
                  {...register('uploadPhoto')}
                />
                {errors.uploadPhoto ? (
                  <p className='text-danger'>{errors.uploadPhoto.message}</p>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  className='form-control'
                  {...register('password')}
                />
                {errors.password ? (
                  <span className='text-danger'>{errors.password.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  className='form-control'
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword ? (
                  <span className='text-danger'>
                    {errors.confirmPassword.message}
                  </span>
                ) : null}
              </div>
              <div className='d-grid mt-3'>
                <button className='btn btn-primary' id='registerButton'>
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