import React from 'react';
import Navigation from '../navigation';

export default function PageWrapper({ children }) {
  return (
    <div>
      <Navigation />
      <div>
        {children}
      </div>
    </div>
  );
}
