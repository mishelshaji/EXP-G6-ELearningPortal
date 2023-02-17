import React from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/style.css';

export default function FeedbackList() {
    const feedbacks = [
        {
            date: '18/01/2023',
            feedback:
                'C is a general-purpose programming language created by Dennis Ritchie'
        },
        {
            date: '18/01/2023',
            feedback:
                'C is a general-purpose programming language created by Dennis Ritchie'
        },
        {
            date: '18/01/2023',
            feedback:
                'C is a general-purpose programming language created by Dennis Ritchie'
        }
    ];

    const course = {
        title: 'Introduction of C',
        level: 'Beginners',
        discription:
            'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.'
    };

    return (
        <div className='fluid'>
            <div className="feedback-main-body p-5">
            <div className='feedback-main '>
                <div className='feedback-header p-2 rounded mb-4'>
                    <h5>{course.title}</h5>
                    <h6 className='mb-2 text-muted'>{course.level}</h6>
                    <p>{course.discription}</p>
                </div>
                    <div className="feedback-body-content p-5 rounded mb-5 ">
                    <p className='fs-5'>Students Feedback</p>
                        {feedbacks.map((i) => {
                            return (
                                <div className='feedback-card col mt-2'>
                                    <div className='feedback-card shadow-lg p-3 rounded mb-4'>
                                        <div>
                                            <p>{i.feedback}</p>
                                            <textarea
                                            className="text-area col-md-8 offset-md-1"
                                                name='reply'
                                                placeholder='Reply'
                                                id='reply'
                                                rows='2'
                                            />
                                            <Button className='mb-5 ms-3'>
                                                Reply
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
