import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Articles = ({ data }) => {
  return (
    <div className='flex flex-wrap mx-auto justify-center'>
      {data?.map((devto) => {
        return (
          <div
            key={devto.id}
            className='flex flex-col bg-gray-800 shadow-sm p-2 rounded-lg max-w-sm mx-3 my-4 flex-wrap justify-between border-white border-solid border'
          >
            <div className='w-10/12 py-4 mx-auto'>
              <img className='rounded-lg w-full' alt={devto.user.name} src={devto.social_image} />
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
                      title={`https://twitter.com/${devto.user.twitter_username}`}
                    >
                      <img className='w-6  mr-4 flex ' src='/twitter_icon.png' alt='twitter bird' />
                    </a>
                  )}
                  {devto.user.github_username && (
                    <a
                      href={`https://github.com/${devto.user.github_username}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      title={`https://twitter.com/${devto.user.twitter_username}`}
                    >
                      <img className=' w-6 flex' src='/github_icon.png' alt='github cat' />
                    </a>
                  )}
                </div>
              </div>
              <img
                className='rounded-full w-12 flex items-center justify-center'
                src={devto.user.profile_image_90}
                alt='profile image'
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
  );
};

export default Articles;
