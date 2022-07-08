import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <header className='bg-blue-900'>
        <div className='container mx-auto flex justify-between'>
          <nav className='flex'>
            <NavLink
              to='/'
              exact='true'
              activeclassname='text-black'
              className='inline-flex items-center px-3 py-6 mr-4 text-gray-200 hover:text-gray-400 text-4xl font-bold source-serif-pro'
            >
              Jonathon
            </NavLink>
            <NavLink
              to='/post'
              className='inline-flex items-center p-3 my-6 rounded text-gray-200 hover:text-gray-400'
              activeclassname='text-white bg-blue-800'
            >
              Blog Posts
            </NavLink>
            <NavLink
              to='/project'
              className='inline-flex items-center p-3 my-6 rounded text-gray-200 hover:text-gray-400'
              activeclassname='text-white bg-blue-800'
            >
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className='inline-flex items-center p-3 my-6 rounded text-gray-200 hover:text-gray-400'
              activeclassname='text-white bg-blue-800'
            >
              About
            </NavLink>
          </nav>

          <div className='inline-flex p-3 my-6'>
            <a
              href='https://www.linkedin.com/in/jonathoncisneros/'
              target='_blank'
              rel='noreferrer'
              className='text-2xl mr-2 text-gray-200'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/JonathonCisneros'
              target='_blank'
              rel='noreferrer'
              className='text-2xl mr-2 text-gray-200'
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
