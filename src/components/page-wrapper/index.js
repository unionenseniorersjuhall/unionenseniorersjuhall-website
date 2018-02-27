import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MainContent from '../main-content';

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  );
}
