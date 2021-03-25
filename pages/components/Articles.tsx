import React from 'react';

const Articles = ({ data }) => {
  return (
    <div className='flex flex-wrap mx-auto justify-center'>
      {data?.map((devto) => {
        return (
          <div
            key={devto.id}
            className='flex flex-col bg-gray-800 shadow-sm p-2 rounded-lg max-w-md mx-3 my-4 flex-wrap justify-between'
          >
            <img
              className='rounded-lg w-10/12 py-4 mx-auto'
              alt={devto.user.name}
              src={devto.social_image}
            />
            <a
              href={devto.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-lg font-medium text-purple-400 text-center w-10/12 mx-auto hover:text-purple-600 hover:underline'
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
                      <img className='w-6  mr-4 flex' src='/twitter_icon.png' alt='twitter bird' />
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
                <div className='inline-flex justify-between items-center px-3 font-medium text-white shadow-md rounded-full bg-purple-600 text-s mt-1'>
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
