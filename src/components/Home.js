import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img className={homeStyles.image} alt="godot" src="godot.jpg" />
        </div>
        <div>
          <img className={homeStyles.bookImage} alt="book" src="book.png" />
          <img
            className={homeStyles.pencilImage}
            alt="pencil"
            src="pencil.png"
          />
        </div>
      </div>
    );
  }
}

export default Home;
