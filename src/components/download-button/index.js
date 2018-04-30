import React from 'react';

function DownloadButton({ children, href }) {
  return (
    <a className="download-button" href={href} download>{children}</a>
  );
}

export default DownloadButton;
