import React from "react";
import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <main>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! page Not Found</p>
        <NavLink to="/">
          <span>Go back to homepage</span>
        </NavLink>
      </div>
    </main>
  );
}

export default NotFound;
