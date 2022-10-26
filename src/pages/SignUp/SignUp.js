import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { providerLogin, error, setError, createUser } = useContext(AuthContext);

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        providerLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/dashboard');
            })
            .catch(error => { console.error(error) });
    }
    const handleGithubSignIn = () => {
        providerLogin(githubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/dashboard');
            })
            .catch(error => { console.error(error) });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, photoURL, password, confirmPassword);
        if (password !== confirmPassword) {
            setError('Password does not match');
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long');
        }
        else {
            setError(null);
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/dashboard');
                })
                .catch(error => { setError(error.message) });

            form.reset();
        }

    }
    return (
        <div>
            <div>
                <div className='lg:w-1/2 w-3/4 mx-auto py-10'>
                    <div className='text-center mb-10'>
                        <h1 className='text-4xl font-bold'>Sign Up</h1>


                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className='mb-4'>
                            <label className='mb-2 text-xl block'>Full Name:</label>
                            <input name='name' type="text" placeholder="Enter Your Full Name" className="input input-bordered input-success w-full" required />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2 text-xl block'>Email:</label>
                            <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered input-success w-full" required />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2 text-xl block'>Photo URL:</label>
                            <input name='photoURL' type="url" placeholder="Enter Your Photo Url" className="input input-bordered input-success w-full" required />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2 text-xl block'>Password:</label>
                            <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered input-success w-full" required />
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2 text-xl block'>Confirm Password:</label>
                            <input name='confirmPassword' type="password" placeholder="Enter Your Password Again" className="input input-bordered input-success w-full" required />
                        </div>
                        {
                            error ? (
                                <p className='bg-red-600 p-3 mb-4 mt-5 text-center animate-bounce text-white'>
                                    {error}
                                </p>
                            ) :
                                null
                        }
                        <div className='mb-4 text-center'>
                            <button className='btn btn-outline btn-success px-10'>Sign Up</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div className='mb-4 text-center'>
                        <p>Sign Up with</p>
                    </div>
                    <div className='mb-4 text-center flex justify-center items-center'>
                        <button className='btn btn-info mx-2' onClick={handleGoogleSignIn}>
                            <FaGoogle></FaGoogle>
                        </button>
                        <button className='btn btn-black text-xl mx-2' onClick={handleGithubSignIn}>
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                    <div className="divider">OR</div>
                    <div className='mb-4 text-center'>
                        <p>Already Have an Account? <Link to='/login' className='text-sky-500'>Sign In Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;