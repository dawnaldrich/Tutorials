import React from 'react';
import BookInfo from './book-info';
import BookReviewContainer from './book-review-container';

const BookContainer = (props) => {
  let bookInfo = {
    image: props.book.volumeInfo.imageLinks.large,
    title: props.book.volumeInfo.title,
    author: props.book.volumeInfo.author,
    description: props.book.volumeInfo.description,
    ratings: {
      averageRating: props.book.volumeInfo.averageRating ? props.book.volumeInfo.averageRating : 'n/a',
      ratingsCount: props.book.volumeInfo.ratingsCount ? props.book.volumeInfo.ratingsCount : 'n/a',
    }
  }
  return(
    <div className="book-container">
      <div className="book-img">
        <img src={bookInfo.image} alt={bookInfo.title}/>
      </div>
      <BookInfo title={bookInfo.title} author={bookInfo.author}
        description={bookInfo.description} />
      <BookReviewContainer averageRating={bookInfo.ratings.averageRating}
        ratingsCount={bookInfo.ratings.ratingsCount}/>
    </div>
  )
}

export default BookContainer;