import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex gap-5 bg-blue-400'>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
        <Link to="/products">
        <li>Products</li>
        </Link>
      </div>