import React from 'react';

const Footer = () => {
  return (
    <div className='text-xl font-bold flex justify-center  items-center mx-auto text-purple-200 bg-purple-800 shadow-inner min-h-full h-12 mt-3'>
      <div>
        Created by{' '}
        <a className='px-2 hover:text-indigo-300 hover:underline' href='http://twitter.com/devindford'>
          @DevinDFord
        </a>
      </div>
      <div className='pl-5 text-sm'>© 2021</div>
    </div>
  );
};

export default Footer;
