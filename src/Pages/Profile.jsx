import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import { auth } from '../Firebase/firebase';

function Profile() {

  const { user } = useContext(AuthContext);

  const handelProfileUpdate = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const url = e.target.photoUrl.value;

    const profile = {
      displayName: name,
      photoURL: url
    }
    updateProfile(auth?.currentUser, profile)
      .then(() => {
        console.log("Success")
      })
      .catch(() => {
        console.log("error")
      })
  }


  return (
    <div className="hero bg-base-200 py-12">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Profile !</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelProfileUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" name='photoUrl' placeholder="Url" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
