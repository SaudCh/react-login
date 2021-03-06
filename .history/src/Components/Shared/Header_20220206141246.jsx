import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">
        ChatBox
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/login" class="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">
              Features
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
