import React from "react";
import PropTypes from "prop-types";


export default function NavBar_component(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <ulsss className="dropdown-menu">
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
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ulsss>

            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search"></input>
            <input placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
// we have defined that both the props that we have used should be string, any other data tyype will give the error when passing props 
NavBar_component.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string,
};
// its a good practice to give default props 
NavBar_component.defaultProps= {
  title: "title",
  AboutText: "About your Company",
};
