import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const [activeMenu, setActiveMenu] = useState('Ideas');

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        visible ? 'top-0 bg-orange-500 bg-opacity-90' : '-top-16 bg-opacity-0'
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <h1 className='text-lg font-bold'>Suitmedia</h1>
          </div>
          <ul className='flex items-center'>
            <li
              className={`mr-6 cursor-pointer ${
                activeMenu === 'Work' ? 'text-white border-b-2' : 'text-white'
              }`}
              onClick={() => setActiveMenu('Work')}>
              Work
            </li>
            <li
              className={`mr-6 cursor-pointer ${
                activeMenu === 'About' ? 'text-white border-b-2' : 'text-white'
              }`}
              onClick={() => setActiveMenu('About')}>
              About
            </li>

            <li
              className={`mr-6 cursor-pointer ${
                activeMenu === 'Services'
                  ? 'text-white border-b-2'
                  : 'text-white'
              }`}
              onClick={() => setActiveMenu('Services')}>
              Services
            </li>

            <li
              className={`mr-6 cursor-pointer ${
                activeMenu === 'Ideas' ? 'text-white border-b-2' : 'text-white'
              }`}
              onClick={() => setActiveMenu('Ideas')}>
              Ideas
            </li>

            <li
              className={`mr-6 cursor-pointer ${
                activeMenu === 'Services'
                  ? 'text-white border-b-2'
                  : 'text-white'
              }`}
              onClick={() => setActiveMenu('Services')}>
              Careers
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === 'Contact'
                  ? 'text-white border-b-2'
                  : 'text-white'
              }`}
              onClick={() => setActiveMenu('Contact')}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
