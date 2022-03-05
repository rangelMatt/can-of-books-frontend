import React from 'react';
import { Button } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    }
  }

  handleClose = () => {
    this.setState({ displayForm: false })
  }

  handleEdit = (e) => {
    e.preventDefault();

    let bookToUpdate = {...this.props.book};

    bookToUpdate.title = e.target.title.value;
    bookToUpdate.description = e.target.description.value;
    bookToUpdate.status = e.target.status.value;

    this.props.putBook(bookToUpdate);
    this.handleClose();
  }

  render() {
    let book = this.props.book;
    return (
      <>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.email}</p>
        <Button onClick={(e) => this.props.deleteHandler(e, book._id)}>DELETE</Button>
        <Button onClick={(e) => this.setState({displayForm: true})}>UPDATE</Button>
        <BookFormModal
          displayForm={this.state.displayForm}
          handleClose={this.handleClose}
          submitHandler={this.handleEdit}
          id={book._id}
        />
      </>
    )
  }
}

export default Book;