import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignIn = () => {

    const { providerLogin, signIn, error, setError, setIsLoading } = useContext(AuthContext);

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        providerLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/dashboard');
                setError(null);
                setIsLoading(false);
            })
            .catch(error => { setError(error.message) });
    }

    const handleGithubSignIn = () => {
        setIsLoading(true);
        providerLogin(githubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                setError(null);
                setIsLoading(false);
            })
            .catch(error => { setError(error.message) });
    }

    const handleFormSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/dashboard');
            setError(null);
            setIsLoading(false);
        }).catch(error => { setError(error.message) });

    }

    return (
        <div>
            <div className='lg:w-1/2 w-3/4 mx-auto py-10'>
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className='mb-4'>
                        <label className='mb-2 text-xl block'>Email:</label>
                        <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered input-success w-full" required />
                    </div>
                    <div className='mb-4'>
                        <label className='mb-2 text-xl block'>Password:</label>
                        <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered input-success w-full" required />
                    </div>

                    {
                        error ? (
                            <p className='bg-red-600 p-3 mb-4 mt-5 text-center animate-bounce text-white'>
                                {error}
                            </p>
                        ) :
                            null
                    }

                    <div className='mb-4'>
                        <p>Forget Password? <Link to='/reset' className='text-sky-500'>Reset Now!</Link></p>
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
                    <button className='btn btn-info mx-2' onClick={handleGoogleSignIn}>
                        <FaGoogle></FaGoogle>
                    </button>
                    <button className='btn btn-black text-xl mx-2' onClick={handleGithubSignIn}>
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