import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBW1r-SyWx7KkZXYOAIl9cy4ez2RaN3wA8",
  authDomain: "books-76014.firebaseapp.com",
  databaseURL: "https://books-76014.firebaseio.com",
  projectId: "books-76014",
  storageBucket: "",
  messagingSenderId: "357195371811",
  appId: "1:357195371811:web:6f863acc2d76c450"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
