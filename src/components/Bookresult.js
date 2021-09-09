import React from "react";

const Bookresult = ({ book }) => {
  return (
    <div className="card">
      <div>
        {book.volumeInfo.imageLinks.thumbnail ? (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
        ) : (
          <img src="no-cover.png" alt="" />
        )}
      </div>
      <div className="card-body">
        <h3 className="country-name">{book.volumeInfo.title}</h3>
        <p>
          <strong>Author:</strong>
          {book.volumeInfo.authors}
        </p>
        <p className="country-region">
          <strong>Publisher:</strong>
          {book.volumeInfo.publisher}
        </p>
        <p>
          <strong>Publishing Date:</strong>
          {book.volumeInfo.publishedDate}
        </p>
      </div>
    </div>
  );
};

export default Bookresult;
