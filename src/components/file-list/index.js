import React from 'react';

function FileList({ files }) {
  return (
    <ul className="file-list">
      {Object.entries(files).map(([key, object]) => (
        <li key={object.title} className="file-list__item">
          <h3><a href={object.pdf} download>{object.title}</a></h3>
        </li>
      ))}
    </ul>
  );
}

export default FileList;
