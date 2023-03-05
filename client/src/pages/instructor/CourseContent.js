import React, { useEffect, useState } from 'react';
import '../../assets/style.css';
import { Col, Modal, Button, Spinner } from 'react-bootstrap';
import Axios from '../../services/axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function CourseContent() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const courseId = urlParams.get('c');
    const courseName = urlParams.get('n');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [updateList, setUpdateList] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const [contents, setContents] = useState([]);

    useEffect(() => {
        setError('');
        Axios.get(`instructor/course/contents/${courseId}`)
            .then((contents) => {
                setContents(contents.data);
            })
            .catch((err) => {
                setError(err.response.statusText);
            });
    }, [courseId, updateList]);

    async function courseContentCreation(data) {
        setLoading(true);
        try {
            await Axios.post(
                'instructor/course/contents',
                {
                    title: data.title,
                    duration: data.duration,
                    courseVideoLink: data.videoLink,
                    description: data.description,
                    courseId: courseId
                }
            );
            handleShow();
            setUpdateList(!updateList);
        } catch (err) {
            const error = err.response.data;
            setError(error.Error);
        }
        setLoading(false);
    }

    const schema = yup.object().shape({
        title: yup.string().required('Title field cannot be empty*'),
        description: yup
            .string()
            .required('Description field cannot be empty*'),
        duration: yup.string().required('Duration field cannot be empty*'),
        videoLink: yup.string().required('Video link field cannot be empty*')
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <Col sm={9} md={10} className='mx-auto mt-4'>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Content added</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant='success' onClick={handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className='row fluid' style={{ height: '100vh' }}>
                    <div className='col-lg-6'>
                        <div>
                            <span className='d-block mb-3'>Course: {courseName}</span>
                            <table className='table table-bordered table-hover table-striped'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>SI No.</th>
                                        <th>Content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contents.map((content, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{content.title}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {error ? <span className='text-danger d-block'>{error}</span> : ''}
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <div className='container'>
                            <div className='card' style={{ textAlign: 'left' }}>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <h3
                                                className='text-center'
                                                style={{ color: 'blue' }}
                                            >
                                                Course Content
                                            </h3>
                                        </div>
                                        <form
                                            onSubmit={handleSubmit(
                                                courseContentCreation
                                            )}
                                        >
                                            <div className='form-group mb-3'>
                                                <label>Title</label>
                                                <input
                                                    className='form-control'
                                                    {...register('title')}
                                                ></input>
                                                {errors.title ? (
                                                    <span className='text-danger'>
                                                        {errors.title.message}
                                                    </span>
                                                ) : null}
                                            </div>
                                            <div className='col-lg-12 mb-3'>
                                                <div className='form-group'>
                                                    <label>Description</label>
                                                    <input
                                                        className='form-control'
                                                        {...register(
                                                            'description'
                                                        )}
                                                    ></input>
                                                    {errors.description ? (
                                                        <span className='text-danger'>
                                                            {
                                                                errors
                                                                    .description
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-lg-12 mb-3'>
                                                <div className='form-group'>
                                                    <label>Duration</label>
                                                    <input
                                                        className='form-control'
                                                        {...register(
                                                            'duration'
                                                        )}
                                                    ></input>
                                                    {errors.duration ? (
                                                        <span className='text-danger'>
                                                            {
                                                                errors.duration
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-lg-12 mb-3'>
                                                <div className='form-group'>
                                                    <label>Video Link</label>
                                                    <input
                                                        className='form-control'
                                                        {...register(
                                                            'videoLink'
                                                        )}
                                                    ></input>
                                                    {errors.videoLink ? (
                                                        <span className='text-danger'>
                                                            {
                                                                errors.videoLink
                                                                    .message
                                                            }
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='form-group'>
                                                    <button
                                                        className='btn btn-info md-6 offset-md-5 mt-4'
                                                        type='submit'
                                                    >
                                                        {loading && (
                                                            <Spinner
                                                                animation='border'
                                                                role='status'
                                                                className='d-block mx-auto'
                                                            >
                                                                <span className='visually-hidden'>
                                                                    Loading...
                                                                </span>
                                                            </Spinner>
                                                        )}
                                                        Create
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}
