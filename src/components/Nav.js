import React, { Component } from "react";

import navStyles from "../modules/nav.module.scss";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <h4 className={navStyles.title}>Sauce.</h4>
          </div>
          <ul className={navStyles.navLinks}>
            <a href="#/store">
              <li>
                <h4>Profile</h4>
              </li>
            </a>
            <a href="#/events">
              <li>
                {" "}
                <h4>Books</h4>
              </li>
            </a>

            <a href="#/news">
              <li>
                {" "}
                <h4>About</h4>
              </li>
            </a>
            <a href="/">
              <li>
                {" "}
                <h4>Home</h4>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
