import React from 'react';
import { FaAward, FaDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Broken from '../Broken/Broken';
import './CourseDetails.css';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const data = useLoaderData();

    const ref = React.createRef();


    console.log(data.id ? console.log(data) : console.log('loading...'));
    return (
        data.id ? (
            <div className='relative'>



                {/* <Banner></Banner> */}
                <img src={data.image} className='w-full course-banner' alt="" />
                <div className='py-10 lg:w-3/4 w-full mx-auto course-contents'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>Course Details</h1>
                        <div className='divider'></div>
                    </div>

                    <div className="lg:flex justify-between">
                        <div className='lg:w-1/2'>
                            <h1 className='text-lg bg-success inline-block px-3 rounded text-black mb-3'>
                                Item ID: {data.id}
                            </h1>
                            <h1 className='text-xl'>
                                Course Name: <span className='text-yellow-400'>{data.name}</span>
                            </h1>
                            <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                                Instructor
                            </p>
                            <div className='flex items-center'>
                                <img src={data.instructor_image} className='rounded-full instructor-img' alt="" />
                                <h1 className='text-xl ml-3'>
                                    <span className='text-yellow-400'>{data.instructor}</span>
                                </h1>
                            </div>


                            <div ref={ref}>
                                <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                                    Details About This Course
                                </p>
                                <p className='text-justify'>
                                    {data.description}
                                </p>
                            </div>

                            <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                                Ratings
                            </p>
                            <p className='flex items-center'>
                                <FaStar className='text-yellow-400'></FaStar>
                                {
                                    data.rating === 0 ? 'No Ratings Yet' : data.rating
                                }
                                {
                                    data.totalRating === 0 ? ('') : `(${data.totalRating})`
                                }
                            </p>

                            <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                                Total Students Enrolled
                            </p>
                            <p>
                                {data.totalEnrolled} Students
                            </p>
                        </div>
                        <div className='lg:w-1/2 flex justify-end'>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className='btn btn-outline btn-primary'>Download Pdf <FaDownload className='ml-2'></FaDownload></button>}
                            </Pdf>

                            {/* <div >
                                Hey There!
                                Welcome to this course
                            </div> */}
                        </div>
                    </div>

                    <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                        Some more Amazing thing about this course
                    </p>
                    <div className="mt-5 lg:overflow-hidden overflow-x-auto">
                        <table className="table w-full text-center">
                            <thead>
                                <tr>
                                    <th>Duration</th>
                                    <th>Lectures</th>
                                    <th>Quizzes</th>
                                    <th>Assignments</th>
                                    <th>Projects</th>
                                    <th>Lives</th>
                                    <th>Tests</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {data.totalHours} Hours
                                    </td>
                                    <td>
                                        {data.totalLectures}
                                    </td>
                                    <td>
                                        {data.totalQuizzes}
                                    </td>
                                    <td>
                                        {data.totalAssignments}
                                    </td>
                                    <td>
                                        {data.totalProjects}
                                    </td>
                                    <td>
                                        {data.totalLiveClass}
                                    </td>
                                    <td>
                                        {data.totalPracticeTest}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='mt-5 text-end'>
                        <Link to={`/checkout/${data.id}`} className='btn btn-outline btn-primary'>
                            <FaAward className='mr-2'></FaAward> Get premium access
                        </Link>
                    </div>

                </div>
            </div>
        ) :
            <Broken></Broken>
    );
};

export default CourseDetails;