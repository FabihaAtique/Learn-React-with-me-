import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dar-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.AboutText}
              </a>
            </li>
            {/* Add the dropdown menu class to the parent ul */}
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
            {/* Continue with other navigation items */}
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            
            <input placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
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
