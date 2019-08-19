import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Progress from "../Progress";
import Books from "../Books";
import Friends from "../Friends";
import Book from "../Books/Book";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

import { fetchBooks } from "../../actions/bookActions";

export class App extends Component {
  componentDidMount() {
    this.props.books();
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.PROGRESS} component={Progress} />
          <Route path={ROUTES.BOOKS} component={Books} />
          <Route path={ROUTES.FRIENDS} component={Friends} />
          <Route path={ROUTES.BOOK} component={Book} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    books: () => dispatch(fetchBooks())
  };
};

export default withAuthentication(App);
