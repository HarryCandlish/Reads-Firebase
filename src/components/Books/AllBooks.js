import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

import bookStyles from "../../modules/books.module.scss";

class AllBooks extends Component {
  render() {
    return (
      <ul className={bookStyles.booksGrid}>
        {this.props.books.map(book => (
          <li className={bookStyles.list} key={book.id}>
            <Book book={book} markRead={this.props.markRead} />
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
