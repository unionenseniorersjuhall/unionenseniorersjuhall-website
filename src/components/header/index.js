import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__link" to="/">
          <img className="header__logo" src={logo} alt="Unionen Seniorer Sjuhall" />
          <h2 className="header__logo-text">Seniorer Sjuhall</h2>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
