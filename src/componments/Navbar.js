import React, { useState, useEffect, useRef } from 'react';
import { faker } from '@faker-js/faker';
import { FaBell, FaEnvelope } from 'react-icons/fa'; // Importing React Icons

const Navbar = () => {
  const [avatarUrl] = useState(faker.image.avatar());
  const [name] = useState(faker.name.firstName()); // Using firstName for simplicity
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Example notification and email counts
  const notificationCount = 3;
  const emailCount = 5;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-blue-300 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Title */}
        <div className="text-white text-2xl font-bold">Policy Configurator</div>

        {/* Profile name, notification and mail icons, and avatar */}
        <div className="relative flex items-center space-x-4 ml-auto">
          <span className="mr-3 text-white font-semibold">{name}</span>
          <div className="relative text-white">
            <FaBell className="cursor-pointer" />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
          <div className="relative text-white">
            <FaEnvelope className="cursor-pointer" />
            {emailCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {emailCount}
              </span>
            )}
          </div>
          <img
            src={avatarUrl}
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            onClick={toggleDropdown}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-3 top-full w-48 bg-black border border-gray-300 rounded shadow-lg z-50"
            >
              <ul className="py-2">
                <li className="px-4 py-2 cursor-pointer text-white">Profile</li>
                <li className="px-4 py-2 cursor-pointer text-white">Settings</li>
                <li className="px-4 py-2 cursor-pointer text-white">Logout</li>
                <li className="px-4 py-2 cursor-pointer text-white">Help</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
