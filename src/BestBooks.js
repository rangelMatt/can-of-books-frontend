import React from 'react';
import axios from 'axios';
import { Button, Carousel } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import Book from './Book';
import { withAuth0 } from '@auth0/auth0-react'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      displayForm: false
    }
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */


  getBooks = async () => {
    let bookData = [];
    if(this.props.auth0.isAuthenticated){
      // Get Token
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      // All we need to do for lab is console.log the jwt
      // Sending the token from the front-end is not required.
      try {
        let url = `${process.env.REACT_APP_SER}/books`
        bookData = await axios.get(url)
        this.setState({
          books: bookData.data
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  postBook = async (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: this.props.auth0.user.email
    }
    try {
      let url = `${process.env.REACT_APP_SER}/books`
      let createdBook = await axios.post(url, newBook)
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
      this.handleClose();
    } catch (error) {
      console.error(error)
    }
  }

  deleteHandler = async (e, id) => {
    e.preventDefault();
    try {
      let url = `${process.env.REACT_APP_SER}/books/${id}`
      await axios.delete(url)
      this.getBooks();
    } catch (error) {
      console.error(error)
    }
  }

  putBook = async (bookToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SER}/books/${bookToUpdate._id}`
      await axios.put(url, bookToUpdate)
      this.getBooks();
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  showModal = () => {
    this.setState({ displayForm: true })
  }

  handleClose = () => {
    this.setState({ displayForm: false })
  }


  render() {
    /* DONE: render user's books in a Carousel */
    let carouselElems = this.state.books.map(book => (
      <Carousel.Item
        className="text-center mb-3 bg-warning"
        key={book._id}>
        <Book
          book={book}
          deleteHandler={this.deleteHandler} 
          putBook={this.putBook}
        />
      </Carousel.Item>
    ));
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.showModal}>Add Book</Button>
        <BookFormModal
          displayForm={this.state.displayForm}
          handleClose={this.handleClose}
          submitHandler={this.postBook}
        />
        {this.state.books.length > 0 ? (
          <Carousel variant="dark">
            {carouselElems}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default withAuth0(BestBooks);
