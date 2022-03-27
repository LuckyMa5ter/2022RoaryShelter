import React from "react";
import logo from "../assets/images/logo.svg";
import bar from "../assets/images/bar.svg";

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check">
        <img id="btn" src={bar} />
        <i className="fa fa-times" id="cancel"></i>
      </label>
      <section className="navContainer">
        <img src={logo} id="logo" alt="" />
        <section className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">Services</li>
            <li className="nav-item">Product</li>
            <li className="nav-item">Technology</li>
            <li className="nav-item dropdown">
              About
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    Action
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item dropdown">
              Client
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            <li className="nav-item">Partner</li>
          </ul>
        </section>
        <section className="rightIcon">
          <i className="fas fa-home"></i>
          <i className="far fa-envelope"></i>
          <i className="fas fa-tools"></i>
        </section>
      </section>
    </nav>
  );
};

export default Nav;
