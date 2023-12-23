import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Ideas');

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
          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}>
            <RxHamburgerMenu className='text-4xl' />
          </div>

          {isMenuOpen && (
            <div>
              <nav className='fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-orange-400  '>
                <div
                  className='hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer'
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}>
                  <AiOutlineClose className='text-4xl' />
                </div>
                <ul className=' lg:hidden flex flex-col items-center justify-center h-full '>
                  <li
                    className={` cursor-pointer ${
                      activeMenu === 'Work'
                        ? 'text-white border-b-2'
                        : 'text-white'
                    }`}
                    onClick={() => setActiveMenu('Work')}>
                    Work
                  </li>
                  <li
                    className={` cursor-pointer ${
                      activeMenu === 'About'
                        ? 'text-white border-b-2'
                        : 'text-white'
                    }`}
                    onClick={() => setActiveMenu('About')}>
                    About
                  </li>

                  <li
                    className={` cursor-pointer ${
                      activeMenu === 'Services'
                        ? 'text-white border-b-2'
                        : 'text-white'
                    }`}
                    onClick={() => setActiveMenu('Services')}>
                    Services
                  </li>

                  <li
                    className={` cursor-pointer ${
                      activeMenu === 'Ideas'
                        ? 'text-white border-b-2'
                        : 'text-white'
                    }`}
                    onClick={() => setActiveMenu('Ideas')}>
                    Ideas
                  </li>

                  <li
                    className={` cursor-pointer ${
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
              </nav>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
