import React from 'react';
import axios from 'axios';
import { Button, Carousel } from 'react-bootstrap';
import BookFormModal from './BookFormModal';


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
    try {
      let url = `${process.env.REACT_APP_SER}/books`
      bookData = await axios.get(url)
      this.setState({
        books: bookData.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  postBook = async (e) =>{
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: this.props.user.email
    }
    try {
      let url = `${process.env.REACT_APP_SER}/books`
      let createdBook = await axios.post(url, newBook)
      console.log(createdBook);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  
  showModal = () => {
    this.setState({displayForm: true})
  }

  handleClose = () => {
    this.setState({displayForm: false})
  }
 

  render() {
    console.log(this.state.books);
    /* DONE: render user's books in a Carousel */
    let carouselElems = this.state.books.map(book => (
      <Carousel.Item
        className="text-center mb-3 bg-warning"
        key={book._id}
      >
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.email}</p>
      </Carousel.Item>
    ));
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.showModal}>Add Book</Button>
        <BookFormModal 
          displayForm={this.state.displayForm}
          handleClose={this.handleClose}
          postBook={this.postBook}
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

export default BestBooks;
