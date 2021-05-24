import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function App() {
  return (
    <div>
      <title>Xpensify</title>
      <h3>App Component</h3>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
    </div>
  );
}
