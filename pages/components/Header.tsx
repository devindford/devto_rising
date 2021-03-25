import React from 'react';

const Header = () => {
  return (
    <div className='flex bg-purple-800 shadow-inner items-center justify-between flex-wrap py-4'>
      <div className='flex items-center text-purple-200'>
        <a href='http://dev.to' target='_blank' rel='noopener noreferrer'>
          <img src='/dev-ecosystem.png' alt='Dev unofficial app' className='w-28 ml-8 mr-2' />{' '}
        </a>
        <div className='text-4xl font-bold'>dev.to Rising!</div>
      </div>
      <div className='text-md font-bold py-5 text-purple-200 pr-8'>
        The most recent rising articles from{' '}
        <a
          href='http://dev.to'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-purple-400 hover:underline'
        >
          dev.to
        </a>
      </div>
    </div>
  );
};

export default Header;
