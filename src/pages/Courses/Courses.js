// import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
// import Sidebar from '../../components/Sidebar/Sidebar';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    let categoryArray = []
    // console.log(courses.length)



    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl text-white mt-10'>
                    Total Available Courses: <span className='bg-sky-300 rounded-lg px-3 text-black font-bold py-2'>{courses.length}</span>
                </h2>
            </div>
            <div className='course-container lg:flex'>
                <div className='lg:w-2/3 w-100 mx-auto py-10 grid lg:grid-cols-2 gap-5'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
                <div className='lg:w-1/3 w-100 p-10'>
                    <p className='text-xl font-bold mb-5'>All Categories</p>
                    <div className='divider'></div>
                    <ul className='menu'>
                        {
                            courses.map(course => {
                                if (!categoryArray.includes(course.category)) {
                                    categoryArray.push(course.category)
                                    return (<li className='hover-bordered'>
                                        <Link to="">
                                            {course.category}
                                        </Link>
                                    </li>)
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;