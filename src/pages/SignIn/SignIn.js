import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='lg:w-1/2 w-3/4 mx-auto py-10'>
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                </div>
                <form>
                    <div className='mb-4'>
                        <label className='mb-2 text-xl block'>Email:</label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered input-success w-full" required />
                    </div>
                    <div className='mb-4'>
                        <label className='mb-2 text-xl block'>Password:</label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered input-success w-full" required />
                    </div>

                    <div className='mb-4 text-center'>
                        <button className='btn btn-outline btn-success px-10'>Sign In</button>
                    </div>
                </form>

                <div className="divider">OR</div>

                <div className='mb-4 text-center'>
                    <p>Sign In with</p>
                </div>
                <div className='mb-4 text-center flex justify-center items-center'>
                    <button className='btn btn-info mx-2'>
                        <FaGoogle></FaGoogle>
                    </button>
                    <button className='btn btn-black text-xl mx-2'>
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <div className="divider">OR</div>
                <div className='mb-4 text-center'>
                    <p>No account Yet? <Link to='/signup' className='text-sky-500'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;