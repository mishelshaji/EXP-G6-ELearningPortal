import React, { useState } from 'react';
import Axios from '../../services/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Spinner, Button } from 'react-bootstrap';

export default function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const propsData = location.state;
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    let levelText;

    if (propsData.level === 1) {
        levelText = 'Beginner';
    } else if (propsData.level === 2) {
        levelText = 'Intermediate';
    } else if (propsData.level === 3) {
        levelText = 'Advanced';
    } else {
        levelText = 'Unknown';
    }

    async function courseEnrollment() {
        if (paymentMethod === 'Free') {
            const status = 1;
            const courseId = propsData.id;
            setLoading(true);
            try {
                const response = await Axios.post(`/student/enrollments/${courseId}/${status}`);
                handleShow();
            } catch (err) {
                const error = err.response.data;
				alert('User already enrolled in this course')
            }
            setLoading(false);
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Enrollment success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Hi customer, we know the world is full of choices.
                    Thank you for choosing us! We appreciate it.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 mt-5'>
                        <div className='shadow-lg p-3 rounded'>
                            <p className='mb-3'>Your Order</p>
                            <div className='row mb-3'>
                                <div className='col-md-4'>
                                    <img
                                        src={`http://localhost:80/public/${propsData.featuredImageLink}`}
                                        alt={propsData.title}
                                        className='img-thumbnail'
                                    />
                                </div>
                                <div className='col-md-8'>
                                    <div>
                                        <h5>{propsData.title}</h5>
                                        <h6 className='mb-2 text-muted'>
                                            Level : {levelText}
                                        </h6>
                                        <p>{propsData.metaDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>No. of courses purchasing</p>
                                <p>1</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Total Payable :</p>
                                <p>Rs.{parseFloat(propsData.price)}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                                <p>Payment Methods:</p>
                                <select
                                    onClick={(e) =>
                                        setPaymentMethod(e.target.value)
                                    }
                                    value={paymentMethod}
                                >
                                    {parseFloat(propsData.price) === 0 ? (
                                        <option value='Free' selected={true}>
                                            None
                                        </option>
                                    ) : (
                                        <>
                                            <option value='UPI' selected>
                                                UPI
                                            </option>
                                            <option value='Credit'>
                                                Credit card
                                            </option>
                                            <option value='Debit'>
                                                Debit card
                                            </option>
                                        </>
                                    )}
                                </select>
                            </div>
                            <div className='d-grid'>
                                <Button
                                    variant='info'
                                    type='submit'
                                    onClick={courseEnrollment}
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
                                    Pay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
