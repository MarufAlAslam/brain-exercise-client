import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation();

    if (isLoading) {
        return (
            <div className='py-56'>
                <div className='animate-ping w-10 h-10 rounded-full bg-white my-30 mx-auto'></div>
            </div>
        )
    }
    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;