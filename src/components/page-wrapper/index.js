import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
