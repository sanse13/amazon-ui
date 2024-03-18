import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-2 rounded-lg mt-8 w-full">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023 <a className="hover:underline">Amazon™</a>. All Rights
          Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
