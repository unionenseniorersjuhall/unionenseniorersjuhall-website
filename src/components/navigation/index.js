import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const { pages, homepage } = window.__PRELOADED_STATE__;

  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">Home</Link>
      {pages.map(page => <Link className="navigation__link" to={page.route}>{page.title}</Link>)}
    </nav>
  );
}
