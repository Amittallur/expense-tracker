import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        {/* <Route path='*' element={<h1>Not Found</h1>}/> */}
      </Routes>
      
    </BrowserRouter>
  )
}

export default App