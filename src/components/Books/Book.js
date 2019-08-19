import React, { Component } from "react";
import PropTypes from "prop-types";

import bookStyles from "../../modules/books.module.scss";

class Book extends Component {
  render() {
    const { id, title, image } = this.props.book;
    return (
      <div className={bookStyles.booksFlexbox}>
        <h1 className={bookStyles.booksTitle}>{title}</h1>
        <img src={image} />
        {/* <input type="checkbox" onChange={this.props.markRead.bind(this, id)} /> */}
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
