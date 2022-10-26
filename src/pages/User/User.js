import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import broken from './broken.svg'
import './User.css';

const User = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='lg:w-3/4 w-full mx-auto py-10'>
            <div className='text-center'>
                {
                    user ? (
                        <div>
                            <img src={user?.photoURL} alt={user?.displayName ? user.displayName : user?.email} className='rounded-full block mx-auto my-7 dashboard-dp' />
                            <h2 className='text-xl'>Dashboard for</h2>
                            <h1 className='text-4xl font-bold'>{user?.displayName}</h1>
                            <h4 className='text-lg'>{user?.email}</h4>
                            <p className='text-success'>
                                Email Verified? : {user?.emailVerified ? 'Yes' : 'No'}
                            </p>
                        </div>
                    ) :
                        (
                            <div>
                                <img src={broken} alt="broken" className='block mx-auto my-7 w-1/4' />
                                <h1 className='text-4xl font-bold'>User Not Found</h1>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default User;