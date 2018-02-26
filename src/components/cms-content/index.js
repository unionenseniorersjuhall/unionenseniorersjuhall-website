import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function CmsContent({ title, children }) {
  return (
    <div className="cms-content">
      <h1>{title}</h1>
      <ReactMarkdown source={children} />
    </div>
  );
}
