import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative overflow-hidden'>
      <div
        className='relative z-10 text-white text-center py-24'
        style={{
          transform: `translateY(${scrollPosition * 0.4}px)`,
        }}>
        <h1 className='text-4xl font-bold'>Ideas</h1>
        <p className='mt-4'>Where all our great things begin</p>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          src='/image1.jpeg'
          alt='Banner'
          className='w-full h-full object-cover object-center filter grayscale contrast-100 clip-path-banner'
        />
      </div>
    </div>
  );
};

export default Banner;
