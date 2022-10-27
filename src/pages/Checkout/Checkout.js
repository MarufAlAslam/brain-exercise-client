import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Checkout.module.css';

const Checkout = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className='lg:w-3/4 w-full mx-auto py-10 lg:px-0 px-4'>
            <h2 className='text-center text-4xl font-bold'>
                Checkout Now!
            </h2>
            <div className='lg:flex justify-between'>
                <div className='lg:w-1/2 w-full'>
                    <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                        Details About This Course
                    </p>

                    <table className='table w-full'>
                        <tbody>
                            <tr>
                                <td>
                                    Name:
                                </td>
                                <td className='text-yellow-400'>
                                    {data.name}
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Instructor:
                                </td>
                                <td className='text-yellow-400'>
                                    {data.instructor}
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Duration:
                                </td>
                                <td className='text-yellow-400'>
                                    {data.totalHours} Hours
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Price:
                                </td>
                                <td className='text-yellow-400'>
                                    ${data.price}
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Rating:
                                </td>
                                <td className='text-yellow-400'>
                                    {data.rating}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <p className='mt-10 mb-3 bg-success inline-block px-3 rounded text-black'>
                        Details About Customer
                    </p>

                    <table className='table w-full'>
                        <tbody>
                            <tr>
                                <td>
                                    Name:
                                </td>
                                <td className='text-yellow-400'>
                                    {user.displayName}
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    Email:
                                </td>
                                <td className='text-yellow-400'>
                                    {user.email}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;