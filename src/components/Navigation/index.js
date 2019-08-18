import React from "react";
import { Link } from "react-router-dom";

import navbarStyles from "../../modules/navigation.module.scss";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

const Navigation = ({ authUser }) => (
  <div>
    {" "}
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className={navbarStyles.navOne}>
    {" "}
    <div className={navbarStyles.titleContainer}>
      <h1 className={navbarStyles.title}>i-Read.</h1>
    </div>
    <ul className={navbarStyles.list}>
      <li className={navbarStyles.links}>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className={navbarStyles.links}>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className={navbarStyles.links}>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li className={navbarStyles.links}>
        <SignOutButton />
      </li>
    </ul>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className={navbarStyles.navTwo}>
    <div className={navbarStyles.titleContainer}>
      <h1 className={navbarStyles.title}>i-READ.</h1>
    </div>
    <ul className={navbarStyles.listTwo}>
      <li className={navbarStyles.links}>
        <button className={navbarStyles.navButtonOne}>
          <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
        </button>
      </li>
      <li />
    </ul>
  </nav>
);

export default Navigation;
