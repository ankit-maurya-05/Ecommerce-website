import React from 'react';

export const Button = ({ children, className, ...props }) => (
  <button className={`py-2 px-4 rounded-lg ${className}`} {...props}>
    {children}
  </button>
);
