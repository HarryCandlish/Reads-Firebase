import React from "react";

import { withFirebase } from "../Firebase";

import signOutStyles from "../../modules/signOut.module.scss";

const SignOutButton = ({ firebase }) => (
  <button
    className={signOutStyles.signOutButton}
    type="button"
    onClick={firebase.doSignOut}
  >
    SIGN OUT
  </button>
);

export default withFirebase(SignOutButton);
