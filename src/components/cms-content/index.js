import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function CmsContent({ children }) {
  return (
    <div className="cms-content">
      <ReactMarkdown source={children} />
    </div>
  );
}
