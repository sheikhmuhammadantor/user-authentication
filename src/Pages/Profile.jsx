import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import { auth } from '../Firebase/firebase';
import toast from 'react-hot-toast';

function Profile() {

  const { user } = useContext(AuthContext);
  const { photoURL } = user;

  const handelProfileUpdate = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const url = e.target.photoUrl.value;

    const profile = {
      displayName: name,
      photoURL: url
    }
    if (name && url) {
      updateProfile(auth?.currentUser, profile)
        .then(() => {
          toast.success("Profile Update Successful !");
          toast("You Need To Reload This Page Once !", {
            icon: "🔃"
          });
          e.target.reset();
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
        .catch(() => {
          toast.error("Something Error Happen !")
        })
    } else {
      toast.error("Enter a Valid name and Url !")
    }
  }

  const backgroundStyles = {
    backgroundImage: `url('${photoURL}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-nowrap">Update Profile !</h1>
            <div className='mt-5 space-y-2'>
              {
                user?.displayName ?
                  <h3 className='text-xl text-center'>User Name : <span className='text-lg'>{user.displayName}</span></h3> :
                  <h1>You Don't Provide Any Name, Update Your Profile</h1>
              }
              {
                user?.photoURL ?
                  <div style={backgroundStyles} className='w-48 h-48 max-h-full mx-auto rounded-full outline outline-2 outline-indigo-500 outline-offset-1'></div> :
                  <div className='w-48 h-48 max-h-full mx-auto rounded-full outline outline-2 outline-indigo-500 outline-offset-1 grid place-items-center text-center text-lime-500'>You Don't Provide Any Photo Url</div>
              }
            </div>
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
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
