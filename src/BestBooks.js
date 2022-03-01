import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */


  getBooks = async () => {
    let bookData = [];
    try {
      let url = `${process.env.REACT_APP_SER}/books`
      bookData = await (await axios.get(url))
      this.setState({
        books: bookData.data
      })
    } catch(error){
      console.log(error)
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  render() {
    console.log(this.state.books);
    /* DONE: render user's books in a Carousel */
    let carouselElems = this.state.books.map (book => ( 
        <Carousel.Item 
          className="text-center mb-3 bg-warning"
          key={book._id}
        >
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.email}</p>
        </Carousel.Item>
      )
    );
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ?  (
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
