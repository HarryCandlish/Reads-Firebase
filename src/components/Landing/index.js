import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import landingStyles from "../../modules/landing.module.scss";

import books from "../../images/books.jpg";
import progress from "../../images/progress.jpg";
import thoughts from "../../images/thoughts.jpg";

const Landing = () => (
  <div>
    <div className={landingStyles.gridContainer}>
      <div className={landingStyles.overlay}>
        <h1 className={landingStyles.gridTitle}>Making reading easier.</h1>
        <p className={landingStyles.gridParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={landingStyles.gridButton}>
          <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
        </button>
      </div>
      <div>
        <img className={landingStyles.image} src={books} alt="books" />
      </div>
    </div>
    <div className={landingStyles.gridContainerTwo}>
      <div>
        <img className={landingStyles.imageTwo} src={progress} alt="progress" />
      </div>
      <div className={landingStyles.overlayTwo}>
        <h1 className={landingStyles.gridTitleTwo}>Follow your progress.</h1>
        <p className={landingStyles.gridParagraphTwo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={landingStyles.gridButtonTwo}>
          <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
        </button>
      </div>
    </div>
    <div className={landingStyles.gridContainerThree}>
      <div className={landingStyles.overlayThree}>
        <h1 className={landingStyles.gridTitleThree}>Share your thoughts.</h1>
        <p className={landingStyles.gridParagraphThree}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={landingStyles.gridButtonThree}>
          <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
        </button>
      </div>
      <div>
        <img
          className={landingStyles.imageThree}
          src={thoughts}
          alt="thoughts"
        />
      </div>
    </div>
  </div>
);

export default Landing;
