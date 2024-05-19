// src/layout/AuthLayouts.js
import React from 'react';
import Header from '../components/Header'; // Adjust the path if necessary

const AuthLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayouts;
