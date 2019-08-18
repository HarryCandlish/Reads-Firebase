import React from "react";

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { withAuthorization } from "../Session";

import homeStyles from "../../modules/home.module.scss";

import tropic from "../../images/tropic.jpg";
import graph from "../../images/graph.jpg";
import reviews from "../../images/reviews.jpg";

const HomePage = () => (
  <div>
    <div className={homeStyles.gridContainer}>
      <div className={homeStyles.overlay}>
        <h1 className={homeStyles.gridTitle}>Books.</h1>
        <p className={homeStyles.gridParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={homeStyles.bookButton}>
          <Link to={ROUTES.BOOKS}>Add and Update Books</Link>
        </button>
      </div>
      <div>
        <img className={homeStyles.image} src={tropic} alt="tropic" />
      </div>
    </div>
    <div className={homeStyles.gridContainerTwo}>
      <div>
        <img className={homeStyles.imageTwo} src={graph} alt="graph" />
      </div>
      <div className={homeStyles.overlayTwo}>
        <h1 className={homeStyles.gridTitleTwo}>Progress.</h1>
        <p className={homeStyles.gridParagraphTwo}>
          Lorem ipsum dolore sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={homeStyles.progressButton}>
          <Link to={ROUTES.PROGRESS}>Check Progress</Link>
        </button>
      </div>
    </div>
    <div className={homeStyles.gridContainerThree}>
      <div className={homeStyles.overlayThree}>
        <h1 className={homeStyles.gridTitleThree}>Friends.</h1>
        <p className={homeStyles.gridParagraphThree}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={homeStyles.friendsButton}>
          <Link to={ROUTES.FRIENDS}>Share With Friends</Link>
        </button>
      </div>
      <div>
        <img className={homeStyles.imageThree} src={reviews} alt="reviews" />
      </div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
