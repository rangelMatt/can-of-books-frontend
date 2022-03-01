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

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */


  getBooks = async () => {
    let bookData = [];
    try {
      let url = `${process.env.REACT_APP_SER}/books`
      bookData = await axios.get(url)
      console.log(bookData);
    } catch(error){
      console.log(error)
      
    }
    return bookData.data;
  }

  componentDidMount() {
    let bookData = this.getBooks();
    this.setState({
      books: bookData
    })
  }


  render() {

    /* TODO: render user's books in a Carousel */
    let bookCarousel = (
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            PLACEHOLDER
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ?  (
          {bookCarousel}
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
