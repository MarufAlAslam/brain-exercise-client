/* eslint-disable array-callback-return */
import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import CountUp from 'react-countup';
import { useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import { FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const course = useLoaderData();
    let totalTime = 0;
    let totalStudents = 0;
    let totalVideos = 0;
    // eslint-disable-next-line array-callback-return
    course.map(course => {
        totalTime += course.totalHours;
        totalStudents += course.totalEnrolled;
        totalVideos += course.totalLectures;
    })
    return (
        <div>
            <Banner></Banner>
            <About></About>

            <div className='lg:w-3/4 w-full mx-auto py-10'>
                <div className='lg:flex'>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <p>Total</p>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={course.length} />
                        </h2>
                        <p className='text-xl'>Courses</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <p>Total</p>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalTime} />
                        </h2>
                        <p className='text-xl'>Hours</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <p>Total</p>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalStudents} />
                        </h2>
                        <p className='text-xl'>Students</p>
                    </div>
                    <div className='lg:w-1/4 text-center lg:p-0 p-4'>
                        <p>Total</p>
                        <h2 className='text-6xl font-bold'>
                            <CountUp end={totalVideos} />
                        </h2>
                        <p className='text-xl'>Lectures</p>
                    </div>
                </div>
            </div>


            <div className='popular lg:w-3/4 w-full py-10 mx-auto'>
                <h2 className='text-3xl font-bold text-center text-white'>Popular Courses</h2>
                <p className='lg:flex lg:p-0 p-3 text-center justify-center items-center'>
                    (Courses that has 5<FaStar className='inline'></FaStar> rating is concidered as popular)
                </p>
                <div className='divider'></div>
                <div className='md:grid lg:grid-cols-3 grid-cols-2 lg:p-0 p-4 gap-4 justify-center align-center'>
                    {
                        course.map(course => {
                            if (course.rating === 5) {
                                return <Course key={course.id} course={course}></Course>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;