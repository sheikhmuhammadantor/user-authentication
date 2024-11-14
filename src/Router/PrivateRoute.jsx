import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='mx-auto text-3xl'><span className="loading loading-spinner text-info loading-lg"></span></div>
    }

    if (user?.emailVerified) {
        return children
    }
    // if(!result.user.emailVerified) return toast.error("You Must Verified Your Email, Check Your Inbox !", {})
    return (
        <Navigate to="/"></Navigate>
    )
}

export default PrivateRoute
