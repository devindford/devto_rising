import React from 'react';

function SearchBox({ inputValue, setSearchValue, setInputValue }) {
  return (
    <>
      <div className='flex mt-1 justify-start'>
        <div className='flex flex-col w-full md:w-52'>
          <label id='search' className='text-purple-200 font-medium'>
            Search Tags
          </label>
          <div className='flex rounded-md shadow-sm'>
            <div className=' flex items-stretch flex-grow '>
              <input
                type='text'
                name='search'
                id='search'
                value={inputValue}
                className='focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md pl-1.5 border sm:text-sm border-gray-300 h-8'
                placeholder='Enter a tag name'
                onInput={(e) => {
                  setInputValue(e.currentTarget.value);
                  setSearchValue(e.currentTarget.value.toLowerCase());
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
