import React from 'react';
import './Navbaar.css';
import { Link } from 'react-router-dom';

function Navbaar() {
  return (
    <div className='navbaar container d-flex flex-row justify-content-evenly my-3'>
        <Link to='/' className='nav-item text-color fw-semibold fs-5 border-bottom text-decoration-none'>Home</Link>
        <Link to='/about' className='nav-item text-color fw-semibold fs-5 border-bottom text-decoration-none'>About</Link>
        <Link to='/contact' className='nav-item text-color fw-semibold fs-5 border-bottom text-decoration-none'>Contact</Link>
    </div>
  )
}

export default Navbaar