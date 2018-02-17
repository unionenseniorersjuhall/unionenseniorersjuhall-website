import React from 'react';

export default function CmsContent(props) {
  return (
    <div className="cms-content" dangerouslySetInnerHTML={{ __html: props.body }} />
  );
}
