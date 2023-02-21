import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function InstructorRegistration() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate('/login');
  };
  const handleShow = () => setShow(true);

  async function registration(data) {
    setLoading(true);

    try {
      await axios.post(
        'http://localhost:80/instructor/registration',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          education: data.education,
          dateOfBirth: data.dob,
          yearOfExperience: data.yearOfExperience,
          areaOfExpertise: data.areaOfExpertise,
          phone: data.mobile,
        }
      );
      handleShow();
    } catch (err) {
      const error = err.response.data.errors;
      setError(error.Error);
    }
    setLoading(false);
  }

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('Name field cannot be empty*'),
    lastName: yup
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
    dob: yup.date().required('Field required*').transform((value, inputDate) => {
      console.log(inputDate);
      if (inputDate.length === 0) {
        return null;
      }
      return value;
    }).test("Age must be between 18 and 100", function (value) {
      const today = new Date();
      const age = today.getFullYear() - value.getFullYear();
      value.setFullYear(today.getFullYear());
      if (age >= 18 && age <= 100) {
        return true;
      }
    }),
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Registration success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for signing up. Your account has been created.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='row height-200' id='instructor-registration'>
        <div className='col-sm-6' id='instructor-cover'></div>
        <div className='col-sm-4 offset-sm-1'>
          <div className='ms-3 me-3'>
            <form onSubmit={handleSubmit(registration)}>
              <div className='mb-3'>
                <h2 className='text-center text-secondary mt-5'>Register</h2>
                {error ? (
                  <span className='d-block text-danger text-center'>
                    {error}
                  </span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='firstName'>First name</label>
                <input
                  type='text'
                  id='firstName'
                  className='form-control'
                  {...register('firstName')}
                />
                {errors.firstName ? (
                  <span className='text-danger'>{errors.firstName.message}</span>
                ) : null}
              </div>
              <div className='mb-3'>
                <label htmlFor='lastName'>Last name</label>
                <input
                  type='text'
                  id='lastName'
                  className='form-control'
                  {...register('lastName')}
                />
                {errors.lastName ? (
                  <span className='text-danger'>{errors.lastName.message}</span>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}