import React from 'react';
import Navigation from '../navigation';
import Footer from '../footer';

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
