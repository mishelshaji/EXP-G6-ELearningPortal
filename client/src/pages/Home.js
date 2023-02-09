import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import NavigationBar from "../components/NavigationBar";

export default function Home() {

    const data = [
        {
            id: "1",
            price: "₹2000",
            title: "Nodejs",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/2OTq15A5s0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5ODqShyVHUuogUP3SVn-N_fpc5g"
        },
        {
            id: "2",
            price: "₹3000",
            title: "Nodejs",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g"
        },
        {
            id: "3",
            price: "₹1000",
            title: "Nodejs",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/Crk_5Xy8GMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQqOTomt0B9tlBPLhjBumP1fhqhg"
        },
        {
            id: "4",
            price: "₹4000",
            title: "Nodejs",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g"
        },
        {
            id: "5",
            price: "₹4000",
            title: "React",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZPkKQpUKwyYqCNt5BSBS4S37Vmg"
        },
        {
            id: "6",
            price: "₹4000",
            title: "Nodejs",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mmOmXZmVreh9QdhynlLp_9aKPg"
        }
    ];

    function displayCourses(courseList) {
        return (
            courseList.map((i, index) => {
                return (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <CourseCard {...i} />
                    </Col>
                )
            })
        );
    }

    function searchCourse() {
        if (searchKey.length !== 0) {
            // action
        }
    }

    const latestCourses = displayCourses(data);
    const freeCourses = displayCourses(data);
    const [searchKey, setSearchKey] = useState('');

    return (
        <div>
            <NavigationBar />
            <div className="text-center text-white" id='home-introduction'>
                <p className='display-6'>Grow Your Skills to <br /> Advance Your Career Path</p>
                <div className="mt-5" id="search-box">
                    <input onChange={(e) => { setSearchKey(e.target.value) }} type='search' className='form-input p-3' placeholder="Search For..." />
                    <button onClick={searchCourse} className="btn btn-primary ms-2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className='bg-light'>
                <p className='fs-3 text-center pt-3'>Latest Courses</p>
                <Container>
                    <Row className='justify-content-between'>
                        {latestCourses}
                    </Row>
                </Container>
            </div>
            <p className='fs-3 text-center mt-3'>Free Courses </p>
            <Container>
                <Row className='justify-content-between'>
                    {freeCourses}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}