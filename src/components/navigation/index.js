import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const { pages, homepage } = window.__PRELOADED_STATE__;

  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">Home</NavLink>
      <NavLink className="navigation__link" to="/program">Program</NavLink>
      <NavLink className="navigation__link" to="/bildgalleri">Bildgalleri</NavLink>
      <NavLink className="navigation__link" to="/kontakta-oss">Kontakta oss</NavLink>
    </nav>
  );
}
