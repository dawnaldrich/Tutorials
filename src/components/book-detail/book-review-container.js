import React from 'react';

const BookReviewContainer = (props) => {
  const num = props.averageRating;
  const int = Math.floor(num);
  const dec = num % 1;
  const stars = [];
  for (let i = 0; i < int; i++) {
    stars.push(1);
  }
  if (dec === 0.5) stars.push(2);

  return (
    <div className="book-review-container">
      <div className="book-stars">
        {stars.map(e => (e === 1 ? <i className="fas fa-star"></i> : <i className="fas fa-star-half"></i>))}
      </div>
      <div className="book-review">
        <p> ({props.ratingsCount})</p>
      </div>
    </div>
  );
}

export default BookReviewContainer;
