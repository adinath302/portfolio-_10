import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='px-6 py-8 border-t border-gray-800 animate-slideUp flex flex-col items-center'>
      <div className='flex gap-6 mb-4'>
        <a href='https://github.com/adinathgaware' target='_blank' rel='noopener noreferrer' className='p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-500 group animate-bounce-slow'>
          <FaGithub className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://linkedin.com/in/adinathgaware' target='_blank' rel='noopener noreferrer' className='p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-500 group animate-pulse-slow'>
          <FaLinkedin className='w-5 h-5 group-hover:-rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://instagram.com/adinathgaware' target='_blank' rel='noopener noreferrer' className='p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-500 group animate-bounce-slow'>
          <FaInstagram className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
        </a>
        <a href='https://twitter.com/adinathgaware' target='_blank' rel='noopener noreferrer' className='p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-500 group animate-pulse-slow'>
          <FaXTwitter className='w-5 h-5 group-hover:-rotate-12 transition-transform duration-300' />
        </a>
      </div>
      <p className='font-semibold text-center text-xs text-gray-700 animate-pulse'>© 2026 Adinath Gaware. Built with React & Tailwind.</p>
    </footer>
  );
};

export default Footer;

