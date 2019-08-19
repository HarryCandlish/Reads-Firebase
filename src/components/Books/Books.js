import React, { Component } from "react";
import PropTypes from "prop-types";

import bookStyles from "../../modules/books.module.scss";

class Books extends Component {
  handleClick = (e, book) => {
    return (e.target.value = book);
  };
  render() {
    const { id, title, image } = this.props.book;
    return (
      <div className={bookStyles.booksFlexbox}>
        <button
          className={bookStyles.bookButton}
          value={id}
          onClick={e => {
            this.handleClick(e);
            window.location = `/book/${id}`;
          }}
        >
          <img className={bookStyles.bookImage} src={image} />
        </button>
        {/* <input type="checkbox" onChange={this.props.markRead.bind(this, id)} /> */}
      </div>
    );
  }
}

Books.propTypes = {
  book: PropTypes.object.isRequired
};

export default Books;
