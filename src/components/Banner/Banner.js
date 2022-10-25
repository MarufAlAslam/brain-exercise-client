import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className='hero-banner py-40'>
            <div className='lg:w-3/4 mx-auto'>
                <div className='w-1/2'>
                    <h1 className='lg:text-5xl text-xl font-bold text-white'>
                        Learning Today, <br />
                        Leading Tomorrow
                    </h1>

                    <h4 className='lg:text-xl mt-5'>
                        BrainExercise is a platform where you can learn and practice programming skills. We have a large collection of courses and practice problems.
                    </h4>

                    <div className='mt-10'>
                        <Link to='/courses' className='btn btn-outline btn-primary mr-5 rounded-full px-10'>
                            Get Started Now!
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;