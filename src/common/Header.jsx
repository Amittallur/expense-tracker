import React from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const router = useNavigate();
  const token = localStorage.getItem('auth');
  const handleLogout = () => {
    localStorage.removeItem('auth')
    router('/login');
    
  }

  return (
    <div>
      {!token ? <div className='bg-neutral-900 text-white p-2 flex justify-between'>
        <img src={logo} alt='logo' width={50} height={50} />
        <h2 className='flex items-center font-semibold text-lg'>Expense Tracker</h2>
        <button className='border-2 rounded-md px-2.5 py-2.5 hover:text-black hover:bg-white'><Link to='/signup'>Sign Up</Link></button>
      </div> : <div className='bg-neutral-900 text-white p-2 flex justify-between'>
        <img src={logo} alt='logo' width={50} height={50} />
        <h2 className='flex items-center font-semibold text-lg'>Dashboard</h2>
       <button className='border-2 rounded-md px-2.5 py-2.5 hover:text-black hover:bg-white' onClick={handleLogout}>Logout</button>
      </div>}


    </div>
  )
}

export default Header