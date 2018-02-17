import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">Home</Link>
      <Link className="navigation__link" to="/om-oss">Om oss</Link>
      <Link className="navigation__link" to="/kontakt">Kontakt</Link>
    </nav>
  );
}
