import React from "react";
import { Link } from "react-router-dom";


function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        {isAuthenticated && (
          <li className="navbar-item">
            <Link className="navbar-link" to="/properties">
              Properties
            </Link>
          </li>
        )}
        {isAuthenticated ? (
          <li className="navbar-item">
            <button className="navbar-link" onClick={onLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="navbar-item">
              <Link className="navbar-link" to="/login">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
