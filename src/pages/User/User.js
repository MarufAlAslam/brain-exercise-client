import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const User = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='lg:w-3/4 w-full mx-auto py-10'>
            <div className='text-center'>
                <img src={user?.photoURL} alt={user?.displayName ? user.displayName : user?.email} className='rounded-full block mx-auto my-7' />
                <h2 className='text-xl'>Dashboard for</h2>
                <h1 className='text-4xl font-bold'>{user?.displayName}</h1>
                <h4 className='text-lg'>{user?.email}</h4>
                <p className='text-success'>
                    Email Verified? : {user?.emailVerified ? 'Yes' : 'No'}
                </p>
            </div>
        </div>
    );
};

export default User;