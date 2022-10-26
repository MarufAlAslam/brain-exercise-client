import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ResetPass.css';

const ResetPass = () => {
    const { resetPassword } = useContext(AuthContext);
    const { handleSubmit, register, formState: { errors } } = useForm();
    const notify = () => toast.success("Password reset Email Sent! Check your EMAIL(spam folder too!)");
    const onSubmit = data => {
        resetPassword(data.email);
        notify();
    }
    return (
        <div className='lg:w-3/4 w-full mx-auto py-10'>
            <h1 className='text-4xl font-bold text-center mb-7'>Reset Password</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name='resetEmail' type="email" placeholder="Enter Your Email" className="input input-bordered input-success w-full mb-5" {...register("email", { required: true })} />
                {errors.exampleRequired && <span className='text-red-600'>This field is required</span>}

                <div className='text-end'>
                    <input type="submit" className='btn btn-primary mt-4' value="Send Reset Link" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ResetPass;