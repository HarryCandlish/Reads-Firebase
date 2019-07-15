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
          <ul className={homeStyles.container}>
            <li className={homeStyles.flexbox}>
              <img
                className={homeStyles.imageProfile}
                alt="profile"
                src="profile.png"
              />
            </li>
            <li className={homeStyles.flexbox}>
              <img className={homeStyles.imageBook} alt="book" src="book.png" />
            </li>
            <li className={homeStyles.flexbox}>
              <img className={homeStyles.imagePen} alt="pen" src="pencil.png" />
            </li>
            <li className={homeStyles.flexbox}>
              <img
                className={homeStyles.imageGrowth}
                alt="growth"
                src="growth.png"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
