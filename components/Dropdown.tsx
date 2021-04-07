import React, { useState } from 'react';

const Dropdown = ({ setSortingOrder }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState({ img: '/unsorted.svg', text: 'Unsorted' });
  return (
    <div className='flex justify-center md:justify-end'>
      <div className='mt-1 relative w-full sm:w-80 '>
        <button
          type='button'
          className='relative w-full bg-purple-200 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm'
          onClick={() => setOpen(!open)}
        >
          <span className='flex items-center text-purple-900 font-semibold'>
            <img src={selected.img} alt='' className='flex-shrink-0 h-5 w-5 ' />
            <span className='ml-5 block truncate'>{selected.text}</span>
          </span>
          <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
              className='h-5 w-5 text-purple-900'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clip-rule='evenodd'
              />
            </svg>
          </span>
        </button>
        {open && (
          <ul
            className='absolute mt-1 w-full bg-purple-200 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
            tabIndex={-1}
            role='listbox'
          >
            <li
              className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
              id='listbox-option-0'
              role='option'
            >
              <div
                className='flex items-center text-purple-900 font-semibold'
                onClick={() => {
                  setSelected({ img: '/up_arrow.svg', text: 'Ascending' });
                  setSortingOrder('asc');
                  setOpen(!open);
                }}
              >
                <img src='/up_arrow.svg' alt='' className='flex-shrink-0 h-5 w-5 ' />
                <span className='ml-5 block truncate'>Ascending</span>
              </div>
            </li>
            <li
              className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
              id='listbox-option-0'
              role='option'
            >
              <div
                className='flex items-center text-purple-900 font-semibold'
                onClick={() => {
                  setSelected({ img: '/down_arrow.svg', text: 'Descending' });
                  setSortingOrder('desc');
                  setOpen(!open);
                }}
              >
                <img src='/down_arrow.svg' alt='' className='flex-shrink-0 h-5 w-5 rounded-full' />
                <span className='ml-5 block truncate'>Descending</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
