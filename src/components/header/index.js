import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation';
import NavigationSecondary from '../navigation-secondary';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <NavigationSecondary />
      <div className="header__inner">
        <Link className="header__link" to="/">
          <img className="header__logo" src={logo} alt="Unionen Seniorer Sjuhall" />
          <h2 className="header__logo-text">Seniorer Sjuhall</h2>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
