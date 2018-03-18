import React from 'react';
import DownloadButton from '../download-button';

function FileList({ files }) {
  return (
    <ul className="file-list">
      {Object.entries(files).map(([key, object]) => (
        <li key={object.title} className="file-list__item">
          <h3 className="file-list__item-title">{object.title}</h3>
          <DownloadButton href={object.pdf}>Ladda ner</DownloadButton>
        </li>
      ))}
    </ul>
  );
}

export default FileList;
