import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='px-5 py-10 bg-sky-900'>
            <div className='container mx-auto'>
                <div className='lg:flex justify-between'>
                    <div className='lg:w-1/4 lg:m-0 my-4 lg:pr-6'>
                        <h2 className='text-xl text-white font-bold'>
                            BrainExercise
                        </h2>
                        <p className='text-white mt-5 mb-4'>
                            BrainExercise is a platform where you can learn and practice programming skills. We have a large collection of courses and practice problems.
                        </p>
                        <ul>
                            <li>
                                Phone: <a href="tel:+880 1234 5678">+880 1234 5678</a>
                            </li>
                            <li>
                                Email: <a href="mailto: admin@brainexercise.com">
                                    admin@brainexercise.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-1/4 lg:m-0 my-4'>
                        <h2 className='text-xl text-white font-bold'>
                            Quick Links
                        </h2>
                        <ul className=''>
                            <li className='py-2'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='py-2'>
                                <Link to="/courses">
                                    Courses
                                </Link>
                            </li>
                            <li className='py-2'>
                                <Link to="/faqs">
                                    Faqs
                                </Link>
                            </li>
                            <li className='py-2'>
                                <Link to="/blogs">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-1/4 lg:m-0 my-4'>
                        <h2 className='text-xl text-white font-bold'>
                            Follow Us On:
                        </h2>
                        <ul className=''>
                            <li className='py-2'>
                                <a href="https://www.facebook.com" className='flex items-center' rel='noreferrer' target="_blank">
                                    <FaFacebook className='mr-2'></FaFacebook> Facebook
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="https://www.facebook.com" className='flex items-center' rel='noreferrer' target="_blank">
                                    <FaInstagram className='mr-2'></FaInstagram> Instagram
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="https://www.facebook.com" className='flex items-center' rel='noreferrer' target="_blank">
                                    <FaLinkedinIn className='mr-2'></FaLinkedinIn> Linkedin
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="https://www.facebook.com" className='flex items-center' rel='noreferrer' target="_blank">
                                    <FaTwitter className='mr-2'></FaTwitter> Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-1/4 lg:m-0 my-4'>
                        <h2 className='text-xl text-white font-bold mb-4'>
                            Find Us Here:
                        </h2>
                        <p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.520574574989!2d90.4073823143665!3d23.81033298456255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a2f5c3c8d7%3A0x7b3b3b3b3b3b3b3b!2sBrainExercise!5e0!3m2!1sen!2sbd!4v1625581000000!5m2!1sen!2sbd" title='myLoc' width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;