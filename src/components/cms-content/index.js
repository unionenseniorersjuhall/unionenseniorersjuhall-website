import React from 'react';

export default function CmsContent(props) {
  return (
    <div className="cms-content">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </div>
  );
}
