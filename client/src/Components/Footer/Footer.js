import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer p-2 mt-4'>
      <h5 className='text-center  fw-medium'>"Discover Nagpur in Style - Book Your Stay"</h5>
      <h4 className='text-center fw-semibold'>QUICK LINKS</h4>
      <hr/>
      <Link to='/' className='text-center text-dark text-decoration-none'>Home</Link><br/>
      <Link to='/about' className='text-center text-dark text-decoration-none'>About</Link>
    </div>
  )
}

export default Footer