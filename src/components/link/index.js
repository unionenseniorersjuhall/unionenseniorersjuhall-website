import React from 'react';

function Link({ children, href }) {
  return <a className="link" href={href}>{children}</a>;
}

export default Link;
