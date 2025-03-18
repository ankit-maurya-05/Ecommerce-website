import React from 'react';

export const Input = ({ type, placeholder, className, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);
