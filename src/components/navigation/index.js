import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <NavLink className="navigation__link" exact to="/">Hem</NavLink>
        <NavLink className="navigation__link" exact to="/program">Program</NavLink>
        <NavLink className="navigation__link" exact to="/bildgalleri">Bildgalleri</NavLink>
        <NavLink className="navigation__link" exact to="/styrelse">Styrelse</NavLink>
        <NavLink className="navigation__link" exact to="/information">Information</NavLink>
        <NavLink className="navigation__link" exact to="/kontakta-oss">Kontakta oss</NavLink>
      </div>
    </nav>
  );
}
