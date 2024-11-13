import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

function Home() {

  const { user } = useContext(AuthContext)

  return (
    <div>
      {
        user ?
          <>
            <h1 className='text-7xl font-semibold text-center my-8 py-5 text-cyan-400'>EnJoy</h1>
            <hr />
            <div className='my-5 flex gap-4 justify-center'>
              <Link to="/order" className='btn outline outline-2 outline-purple-500 shadow-purple-500 shadow-lg'>See Order's</Link>
              <Link to="/profile" className='btn outline outline-2 outline-cyan-500 shadow-cyan-500 shadow-lg'>Visit Profile</Link>
            </div>
          </>
          :
          <>
            <h1 className='text-4xl text-center my-8 py-5 text-cyan-400 bg-gray-950'>You Need to LogIn First !</h1>
            <button className='mx-auto block'>
              <Link to="/login" className='btn mx-auto block btn-sm text-cyan-400 px-5 border-2 border-black shadow-2xl text-lg'>LogIn</Link>
            </button>
          </>

      }
    </div>
  )
}

export default Home
