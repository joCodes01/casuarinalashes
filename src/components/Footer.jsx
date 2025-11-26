import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <nav>
        <ul className="footeritems">
          <li>
            <NavLink to="/termsandconditions">Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/privacypolicy">PrivacyPolicy</NavLink>
          </li>
          <li>
            <NavLink to="/accessibilitystatement">
              Accessibility Statement
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
