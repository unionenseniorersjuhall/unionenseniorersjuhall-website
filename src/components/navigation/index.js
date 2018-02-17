import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/om-oss">Om oss</Link>
      </li>
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  );
}
