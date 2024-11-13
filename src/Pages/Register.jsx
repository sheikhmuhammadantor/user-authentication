import React, { useContext, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Register() {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);


  const handelTermsChange = () => {
    setTerms(!terms)
  }

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handelRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setError("Password must be 6 character or longer.")
    }

    if (!terms) {
      return toast(`ইউ আর ভেরি চালাক ব্রো`, {
        icon: '😑',
        position: "top-center"
      });
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset()
        toast.success('Successfully Register !', {})
        setError('')
        navigate('/')
      })
      .catch(err => {
        console.log("ErroR : ", err);
        setError(err.message);
      })
  }

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col my-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-5">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name='password' placeholder="Password" className="input input-bordered" required autoComplete="off" />
              <span onClick={handelShowPassword} className='btn btn-sm absolute bottom-2 right-2 text-lg'>
                {
                  showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                }
              </span>
            </div>
            {/* CheckBox */}
            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input onChange={handelTermsChange} type="checkbox" name="terms" className="checkbox checkbox-info " />
                <span className="label-text ml-2">Accept Our <span className='text-base hover:underline font-medium'>Terms & Condition</span></span>
              </label>
            </div>
            <div className="form-control mt-2">
              <button disabled={!terms} className="btn btn-primary mb-1 disabled:btn-neutral disabled:opacity-60 disabled:text-gray-500">Register</button>
              {
                error && <small className='text-red-500'>{error}</small>
              }
              <p className='mt-2'>Already have an Account ? Place <Link to="/login" className='font-semibold hover:underline'>Log In</Link></p>
            </div>
            {/* Google And GitHub Button */}
            {/* <div className='flex justify-between gap-2'>
              <Link to="/login" className="btn my-2 btn-warning">Register With Google</Link>
              <Link to="/login" className="btn my-2 btn-accent">Register With GitHub</Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
