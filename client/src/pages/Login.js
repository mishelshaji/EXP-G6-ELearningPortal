import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginCard from '../components/LoginCard';
import { Spinner } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function login(data) {
        setLoading(true);
        try {
            const result = await axios.post('http://localhost:80/login', {
                email: data.username,
                password: data.password
            });
            localStorage.setItem('token', result.data.result.token);
            const decoded = jwt_decode(result.data.result.token);
            if (decoded.role === 'admin') {
                navigate('/admin');
            } else if (decoded.role === 'student') {
                navigate('/student');
            } else {
                navigate('/instructor');
            }
        } catch (err) {
            const error = err.response.data.errors;
            if (error.Login) {
                setError(error.Login);
            } else if (error.Validation) {
                setError(error.Validation);
            } else if (error.Database) {
                setError(error.Database);
            }
        }
        setLoading(false);
    }

    const schema = yup.object().shape({
        username: yup
            .string()
            .email('Invalid username/password')
            .required('Email is required')
            .matches(
                /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Invalid username/password'
            ),
        password: yup.string().required('Password is required')
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <div>
            <div className='input-body'>
                <LoginCard>
                    <h1 className='login-title'>Login</h1>
                    {loading && (
                        <Spinner
                            animation='border'
                            role='status'
                            className='d-block mx-auto'
                        >
                            <span className='visually-hidden'>Loading...</span>
                        </Spinner>
                    )}
                    {error ? (
                        <span className='d-block text-danger text-center'>
                            {error}
                        </span>
                    ) : null}
                    <form onSubmit={handleSubmit(login)}>
                        <div className='input-container'>
                            <input
                                type='text'
                                placeholder='Enter your mail id'
                                {...register('username')}
                            />
                            {errors.username ? (
                                <p className='text-danger ms-auto pe-4'>
                                    {errors.username.message}{' '}
                                </p>
                            ) : null}
                            <input
                                type='password'
                                placeholder='Enter your password'
                                {...register('password')}
                            />
                            {errors.password ? (
                                <p className='text-danger ms-auto pe-2'>
                                    {errors.password.message}
                                </p>
                            ) : null}
                        </div>
                        <input
                            type='submit'
                            value='Login'
                            className='login-button'
                        />
                    </form>
                </LoginCard>
            </div>
        </div>
    );
};

export default Login;
