import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h3>About Component</h3>
      <button>
        <NavLink to="/">App</NavLink>
      </button>
    </div>
  );
}
