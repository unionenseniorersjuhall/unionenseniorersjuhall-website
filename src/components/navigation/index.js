import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">Hem</NavLink>
      <NavLink className="navigation__link" to="/program">Program</NavLink>
      <NavLink className="navigation__link" to="/bildgalleri">Bildgalleri</NavLink>
      <NavLink className="navigation__link" to="/kontakta-oss">Kontakta oss</NavLink>
    </nav>
  );
}
