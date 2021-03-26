import React from 'react';

const Header = () => {
  return (
    <div className='sm:sticky relative top-0 flex md:flex-row flex-col bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 border-b-2 border-white shadow-lg items-center md:justify-between justify-center flex-wrap py-2'>
      <div className='flex flex-col sm:flex-row items-center text-purple-200'>
        <a href='http://dev.to' target='_blank' rel='noopener noreferrer'>
          <img
            src='/dev-ecosystem.png'
            alt='Dev unofficial app'
            className='w-20 md:ml-8 mr-2 ml-0'
          />{' '}
        </a>
        <div className='text-4xl font-bold'>dev.to Rising!</div>
      </div>
      <div className='text-md font-bold py-1 text-purple-200 md:pr-8 pr-0'>
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
  );
};

export default Header;
