import React from 'react'

function Profile() {
  return (
    <section>
      {/* <div className="hero bg-base-200">
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
            </form>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Profile
