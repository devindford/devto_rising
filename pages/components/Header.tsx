import React from 'react';
import Dropdown from './Dropdown';

const Header = ({}) => {
  return (
    <header className='sm:sticky relative top-0  bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 border-b-2 border-white shadow-lg  py-2  w-full'>
      <div className='max-w-screen-2xl  mx-auto 2xl:px-0 px-4 w-full flex md:flex-row flex-col items-center md:justify-between justify-center flex-wrap'>
        <div className='flex flex-col sm:flex-row items-center text-purple-200'>
          <a href='http://dev.to' target='_blank' rel='noopener noreferrer'>
            <img src='/dev-ecosystem.png' alt='Dev unofficial app' className='w-20 mr-2' />{' '}
          </a>
          <div className='text-4xl font-bold'>dev.to Rising!</div>
        </div>
        <div className='flex-col '>
          <div className='text-md font-bold py-1 text-purple-200 '>
            The most recent rising articles from{' '}
            <a
              href='http://dev.to'
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-200 ease-in-out hover:text-white hover:underline'
            >
              dev.to
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
