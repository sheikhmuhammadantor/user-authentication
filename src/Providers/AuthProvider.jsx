import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const GitHubSignIn = () => {
        return signInWithPopup(auth, GitHubProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        GitHubSignIn,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
