import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='py-10 lg:px-0 px-4'>
            <div className='lg:flex lg:w-3/4 mx-auto'>
                <div className='lg:w-1/2'>
                    <h2 className='text-white text-4xl mb-5'>About</h2>
                    <p className='text-xl'>
                        BrainExercise is an online learning platform where you can learn and practice programming skills.
                        Here you can learn programming languages and you can also enlarge your skills. We have a large collection of courses and practice problems, and a number of courses are being added every day. Our Instructors are friendly enough to help you out.
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <div className='w-full h-full ml-16 about-bg'></div>
                </div>
            </div>
        </div>
    );
};

export default About;