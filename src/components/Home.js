import React from 'react';
import image from '../yosemite.jpeg';

function Home() {
  return (
    <main>
      <img
        src={image}
        alt='yosemite'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-5xl text-gray-200 font-bold source-serif-pro lg:text-[100px] leading-none lg:leading-snug'>
          Hello, I am Jonathon
        </h1>
      </section>
    </main>
  );
}

export default Home;
