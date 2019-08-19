import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { id, title, image } = this.props.book;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
