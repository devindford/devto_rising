import React from 'react';

const Articles = ({ data }) => {
  console.log(data[0].tags);
  return (
    <div>
      {data.map((devto) => {
        return (
          <div key={devto.id}>
            <img className='h-1/5 w-1/2' src={devto.social_image}></img>
            <h2>{devto.title}</h2>
            <p>{devto.tags.split(',').join('')}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
