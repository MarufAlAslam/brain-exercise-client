import React from 'react';
import errorImg from './Broken.svg';

const Broken = () => {
    return (
        <div className='text-center py-10'>
            <img src={errorImg} className='lg:w-1/4 w-3/4 block m-auto' alt="" />

            <h1 className='text-3xl text-white mt-5'>
                We've Search Everywhere But We Can't Find This Page.
            </h1>
            <p>
                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
            </p>

        </div>
    );
};

export default Broken;