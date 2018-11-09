import React from 'react';

const BookInfo = (props) => {
  console.log(props.description);
  return (
    <div className="book-info">
      <div className="book-title">
        <h1>{props.title}</h1>
      </div>
      <div className="book-author">
        <h3>{props.author}</h3>
      </div>
      <div className="book-description">
        <p dangerouslySetInnerHTML={ { __html: props.description } } />
      </div>
    </div>
  );
};

export default BookInfo;
