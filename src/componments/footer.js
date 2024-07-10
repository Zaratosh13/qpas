// src/components/Footer.js
import React from 'react';

// Function to get the current year
const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

// Function to get the last login date and time
const getLastLogin = () => {
  // For demo purposes, we're using a fixed date.
  // Replace this with dynamic data as needed.
  const lastLoginDate = new Date('2024-06-11T14:35:00');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return lastLoginDate.toLocaleString('en-US', options);
};

const Footer = () => {
  const currentYear = getCurrentYear();
  const lastLogin = getLastLogin();

  return (
    <footer className="bg-navy py-4 text-center z-50 w-full mt-auto">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-white">
          © {currentYear} Qalibre Software Solutions. All rights reserved.
        </p>
        <p className="text-white">
          Last Login: {lastLogin}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
