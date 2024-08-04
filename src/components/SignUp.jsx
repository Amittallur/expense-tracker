import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Header from '../common/Header';

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
    <div className='h-screen'>  
    <Header/>
      <div className='flex justify-center items-center  mt-28'>
      <div className=' w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow '>
        <h4 className='text-center p-4 text-2xl font-bold '>Sign Up</h4>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='p-2'>
            <label className='text-lg'>Email</label>
            <input
              type='email'
              required
              placeholder='Enter your email'

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md p-2 border border-gray-300  w-full'
            />
          </div>
          <div className='p-2 '>
            <label className='text-lg'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              required
              placeholder='Enter your password'
              className='rounded-md p-2 border border-gray-300  w-full'
            />
          </div>
          <div className='p-2  '>
            <label className='text-lg '>Confirm Password</label>
            <input
              type='password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm password'
              className='rounded-md p-2 border border-gray-300  w-full'
            />
          </div>
          <div className='flex justify-center p-2'>
            <button type='submit' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              Submit
            </button>
          </div>
        </form>
       
      </div>
    </div>
    </div>

  )
}

export default SignUp