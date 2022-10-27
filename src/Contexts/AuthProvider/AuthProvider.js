import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // const navigate = useNavigate()


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => { console.error(error) });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const profileUpdate = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }



    const authInfo = { user, providerLogin, setError, error, isLoading, setIsLoading, createUser, signIn, logOut, resetPassword, profileUpdate };


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;