import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar py-4 px-10 text-white flex items-center justify-between'>
      <a href="/" className='navbar-logo text-2xl pl-16'>FlexiBuy</a>

      <button
        className="hamburger-menu md:hidden"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:gap-8 absolute md:static w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a className='nav-link block md:inline py-2 md:py-0 font-mono' href="/">Home</a>
        <a
          className='nav-link block md:inline py-2 md:py-0 font-mono'
          href="https://docs.google.com/document/d/1pGko6iyP7HlOfyMerIvUaKcQUxty1ZZhOf_JM2jQt9k/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          How it works
        </a>
        <a className='nav-link block md:inline py-2 md:py-0 font-mono' href="#about-us">About Us</a>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Terms'>Terms</Link>
      </div>
    </nav>
  );
}

export default Navbar;