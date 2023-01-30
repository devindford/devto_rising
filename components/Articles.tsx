import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { v4 as uuid } from 'uuid';
import { sortList, toJSON } from '../utils/helperFunctions';
import SearchBox from './SearchBox';
import ReactLoading from 'react-loading';
import { DevToData } from '../utils/types';
import Image from 'next/image';
import Loader from './Loader';

const Articles = ({ sortingOrder }) => {
  const fetcher = () => fetch(`https://dev.to/api/articles?top=5`).then(toJSON);
  const [searchValue, setSearchValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const { data, isLoading, error, isFetching } = useQuery('devToData', fetcher, {
    staleTime: Infinity,
  });
  const devToData = data as DevToData[] | undefined;

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return (
    <section className=' max-w-screen-2xl w-full mx-auto 2xl:px-0 px-4'>
      <div className='min-h-full h-full'>
        <SearchBox
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchValue={setSearchValue}
        />
        <div className='xl:justify-between 2xl:justify-center grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 col-span-1 justify-items-center'>
          {devToData
            ?.filter((d) => d.tags.includes(`${searchValue}`))
            .sort((a, b) => sortList(a, b, sortingOrder))
            .map((devto) => {
              return (
                <div
                  key={devto.id}
                  className='flex flex-col bg-gray-800 shadow-sm p-2 rounded-lg max-w-sm mx-3 my-4 flex-wrap justify-between border-white border-solid border'
                >
                  <div className='w-10/12 py-4 mx-auto'>
                    <Image
                      className='rounded-lg w-full'
                      alt={devto.user.name}
                      src={devto.social_image}
                      width='350'
                      height='175'
                      layout='intrinsic'
                    />
                  </div>

                  <a
                    href={devto.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition duration-200 ease-in-out text-lg font-medium text-purple-400 w-10/12 mx-auto hover:text-white hover:underline'
                    title={devto.url}
                  >
                    {devto.title}
                  </a>
                  <div className='flex items-center w-10/12 justify-between my-3 mx-auto'>
                    <div className='flex flex-col'>
                      <div className='text-md text-purple-400'>Written by: {devto.user.name}</div>

                      <div className='flex items-center py-2'>
                        {devto.user.twitter_username && (
                          <a
                            href={`https://twitter.com/${devto.user.twitter_username}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mr-3'
                            title={`https://twitter.com/${devto.user.twitter_username}`}
                          >
                            <img
                              src='/twitter_icon.png'
                              alt='twitter bird'
                              width='24'
                              height='24'
                            />
                          </a>
                        )}
                        {devto.user.github_username && (
                          <a
                            href={`https://github.com/${devto.user.github_username}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            title={`https://twitter.com/${devto.user.twitter_username}`}
                          >
                            <img src='/github_icon.png' alt='github cat' width='24' height='24' />
                          </a>
                        )}
                      </div>
                    </div>
                    <Image
                      className='rounded-full w-12 flex items-center justify-center'
                      src={devto.user.profile_image_90}
                      alt='profile image'
                      width='48'
                      height='48'
                    />
                  </div>
                  <div className='flex justify-evenly w-10/12 mx-auto flex-wrap'>
                    {devto.tag_list.map((tag) => (
                      <div
                        key={uuid()}
                        className='inline-flex justify-between items-center px-2 py-1 font-medium text-white rounded-full bg-purple-800 text-xs mt-2'
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-evenly w-10/12 mx-auto py-2'>
                    <div className='text-sm font-bold text-purple-300'>
                      Comments: {devto.comments_count} {devto.comments_count >= 10 ? '🤯' : ''}
                    </div>
                    <div className='text-sm font-bold text-purple-300'>
                      Reactions: {devto.public_reactions_count}{' '}
                      {devto.public_reactions_count >= 25 ? '🔥' : ''}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
