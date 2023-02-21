import React from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export default function StudentRegistration() {
  const navigate = useNavigate();
    async function registration(data) {
        try {
            const result = await axios.post(
                'http://localhost:80/student/registration',
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    phone: data.mobile
                }
            );
            alert(result.data.result.status);
            navigate('/login');
        } catch (err) {
            const error = err.response.data.errors;
            console.log(err);
            if (error.Email) {
                alert('User already exists');
            } else if (error.Validation) {
                alert('User already exists');
            } else if (error.Validation) {
            }
        }
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
            .matches(
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                'Email must be valid'
            ),
        mobile: yup
            .string()
            .required('Mobile is required*')
            .min(10, 'Mobile number must be 10 digits')
            .max(10, 'Mobile number must be 10 digits')
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Enter valid mobile number'
            ),
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
            <div className='row height-100' id='student-registration'>
                <div className='col-sm-6' id='student-cover'></div>
                <div className='col-sm-4 offset-sm-1'>
                    <div className='ms-3 me-3'>
                        <form onSubmit={handleSubmit(registration)}>
                            <div className='mb-3'>
                                <h2 className='text-center text-secondary mt-5'>
                                    Register
                                </h2>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='name'>First name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='firstName'
                                    {...register('firstName')}
                                />
                                {errors.firstName ? (
                                    <span className='text-danger'>
                                        {errors.firstName.message}
                                    </span>
                                ) : null}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='name'>Last name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='lastName'
                                    {...register('lastName')}
                                />
                                {errors.lastName ? (
                                    <span className='text-danger'>
                                        {errors.lastName.message}
                                    </span>
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
                                    <span className='text-danger'>
                                        {errors.email.message}
                                    </span>
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
                                    <span className='text-danger'>
                                        {errors.mobile.message}
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
                                    <span className='text-danger'>
                                        {errors.password.message}
                                    </span>
                                ) : null}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmPassword'>
                                    Confirm Password
                                </label>
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
                                <button
                                    className='btn btn-primary'
                                    id='registerButton'
                                >
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
