import React from 'react';
import EnrollCourseCard from '../../components/student/EnrollCourseCard';

export default function EnrolledCourses() {
    const data = [
        {
            title: 'Introduction of C',
            level: 'Beginners',
            discription:
                'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.',
            date: '18/01/2023',
            img: 'https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header-1024x576.jpg'
        },
        {
            title: 'React: Design Patterns',
            level: 'Intermidiate',
            discription: 'Take your React skills to the next level.',
            date: '16/01/2023',
            img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
        },
        {
            title: 'Databases for Node.js Developers',
            level: 'Expert',
            discription:
                'Learn to create real database applications with Node.js.',
            date: '20/01/2023',
            img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        },
        {
            title: 'Advanced Express',
            level: 'Beginners',
            discription: 'Tackle any project with Express.',
            date: '02/02/2023',
            img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            title: 'React',
            level: 'Beginners',
            discription: 'Take your React skills to the next level.',
            date: '16/01/2023',
            img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80'
        }
    ];

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {data.map((i, index) => {
                        return <EnrollCourseCard {...i} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}