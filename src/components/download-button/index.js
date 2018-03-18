import React from 'react';

function DownloadButton({ children, href }) {
  return (
    <button className="download-button" href={href} download>{children}</button>
  );
}

export default DownloadButton;
