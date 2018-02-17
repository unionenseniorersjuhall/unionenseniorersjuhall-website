import React from 'react';

export default function CmsContent(props) {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.body }} />
  );
}
