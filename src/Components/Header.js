import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
      <h2>Xpensify</h2>
      <NavLink activeClassName="is-active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="is-active" to="/create">
        Create
      </NavLink>
      <NavLink activeClassName="is-active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="is-active" to="/help">
        Help
      </NavLink>
    </header>
  );
}
