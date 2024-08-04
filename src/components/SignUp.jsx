import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignUp = () => {
  const router = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const auth = { email: email, password: password, confirmPassword: confirmPassword };
    if (password !== confirmPassword){
      toast.error("Passwords must match");
      router('/signup')
    }
    else {
      localStorage.setItem('auth',JSON.stringify(auth))
      toast.success('Registration Successfull')
      router('/login');
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' p-8 rounded-md shadow-2xl min-w-[400px]'>
        <h4 className='text-center p-4 text-2xl font-bold '>Login</h4>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='p-2'>
            <label className='text-lg'>Email:</label>
            <input
              type='email'
              required
              placeholder='Enter your email'

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md p-2 border border-gray-300  ml-28 min-w-[300px]'
            />
          </div>
          <div className='p-2 '>
            <label className='text-lg'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              required
              placeholder='Enter your password'
              className='rounded-md p-2 border border-gray-300  ml-20 min-w-[300px]'
            />
          </div>
          <div className='p-2  '>
            <label className='text-lg '>Confirm Password:</label>
            <input
              type='password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm password'
              className='rounded-md p-2 border border-gray-300  ml-3 min-w-[300px]'
            />
          </div>
          <div className='flex justify-center p-2'>
            <button type='submit' className='p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-900'>
              Submit
            </button>
          </div>
        </form>
        <div className='flex justify-center p-2'>
          <p className='text-lg'>
            New User, <span className='text-blue-500 underline text-md'><Link to='/signup'>Register</Link></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp