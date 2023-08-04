import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Use Link instead of link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/About">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                {props.AboutText}
              </Link>
            </li>
            {/* Add the dropdown menu class to the parent ul */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            {/* Continue with other navigation items */}
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            {/* linkcondition is used to set the text color to either light or dark  */}
            <div className={`form-check form-switch text-${props.Mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

// PropTypes and defaultProps remain the same
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title",
  AboutText: "About your Company",
};
