import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BooksSection from '../components/books-section/books-section';
import Loader from '../components/book-detail/loader';

class BooksSectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.categoryName} &key=AIzaSyDgXae5o3Qw4LFTFyDvQQEuA2Eby1zIml8`)
      .then((response) => {
        this.setState({
          books: response.data.items,
          isLoading: false,
        });
      });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.categoryName !== this.props.categoryName) {
      this.setState({
        isLoading: true,
      })
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.categoryName} &key=AIzaSyDgXae5o3Qw4LFTFyDvQQEuA2Eby1zIml8`)
        .then((response) => {
          this.setState({
            books: response.data.items,
            isLoading: false,
          });
        });
    }
  }
  render() {
    return (
      <div className="has-fixed-footer">
        <Header/>
        {this.state.isLoading ?
          <Loader/> :
          <BooksSection title={this.props.categoryName} books={this.state.books}/>
        }
        <Footer/>
      </div>
    );
  }
}

BooksSectionPage.defaultProps = {
  categoryName: 'HTML',
}

export default BooksSectionPage;

