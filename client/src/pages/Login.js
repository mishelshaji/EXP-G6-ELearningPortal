import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginCard from '../components/LoginCard';

const Login = () => {
    function login(data) {

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