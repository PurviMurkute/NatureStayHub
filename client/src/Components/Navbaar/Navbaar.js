import React from 'react';
import './Navbaar.css';
import { Link } from 'react-router-dom';

function Navbaar() {
  return (
    <div className='navbaar d-flex flex-row justify-content-end py-4 pe-5' style={{backgroundColor: '#e2daeb'}}>
        <Link to='/' className='nav-item fw-semibold fs-5 mx-5 text-dark text-decoration-none'>Home</Link>
        <Link to='/about' className='nav-item fw-semibold fs-5 mx-5 text-dark text-decoration-none'>About</Link>
        <Link to='/contact' className='nav-item fw-semibold fs-5 mx-5 text-dark text-decoration-none'>Contact</Link>
    </div>
  )
}

export default Navbaar