import React from 'react';
import { NavLink } from 'react-router-dom';
export default function PageNotFound() {
  return (
    <div>
      <h3>Page Not Found!</h3>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}
