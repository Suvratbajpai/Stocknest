import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
    <div class="container p-2">
      <Link class="navbar-brand" to="/">
        <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link active" to="/signup">
                SignUp <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </form>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
