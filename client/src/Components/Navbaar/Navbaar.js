import React from 'react';
import './Navbaar.css';
import { Link } from 'react-router-dom';

function Navbaar() {
  return (
    <div className='navbaar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbaar