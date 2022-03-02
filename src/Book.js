import React from 'react';
import { Button } from 'react-bootstrap';

class Book extends React.Component {

  render() {
    let book = this.props.book;
    return (
      <>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.email}</p>
        <Button onClick={(e) => this.props.deleteHandler(e, book._id)}>DELETE</Button>
      </>
    )
  }
}

export default Book;