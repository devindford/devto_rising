import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-auto text-xl font-bold flex justify-center w-full  items-center mx-auto text-purple-200 border-t-2 border-white bg-purple-800 shadow-inner min-h-full h-14'>
      <div>
        Created by{' '}
        <a
          className='px-2 hover:text-indigo-300 hover:underline'
          href='http://twitter.com/devindford'
        >
          @DevinDFord
        </a>
      </div>
      <div className='pl-5 text-sm'>© 2021</div>
    </footer>
  );
};

export default Footer;
