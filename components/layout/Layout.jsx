import React from 'react';
import { MainHeader } from '../mainHeader/MainHeader';
// import { Footer } from '../footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />

      <div>
        {children}

        {/* <Footer /> */}
      </div>
    </>
  );
};
