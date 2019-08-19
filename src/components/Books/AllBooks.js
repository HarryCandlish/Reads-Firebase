import React, { Component } from "react";
import Books from "./Books";
import PropTypes from "prop-types";

import bookStyles from "../../modules/books.module.scss";

class AllBooks extends Component {
  render() {
    return (
      <ul className={bookStyles.booksGrid}>
        {this.props.books.map(book => (
          <li className={bookStyles.list} key={book.id}>
            <Books book={book} markRead={this.props.markRead} />
          </li>
        ))}
      </ul>
    );
  }
}

AllBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default AllBooks;
