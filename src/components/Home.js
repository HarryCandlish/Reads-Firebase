import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <img className={homeStyles.image} alt="godot" src="godot.jpg" />
      </div>
    );
  }
}

export default Home;
