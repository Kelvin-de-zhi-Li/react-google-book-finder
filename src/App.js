import React, { useState } from "react";
import axios from "axios";
import Bookresult from "./components/Bookresult";
import "./App.css";

const App = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const apikey = "AIzaSyBCtf3Rg-5puqYbJNoYJ-xRoRMZxDckYbg";

  const handleonchange = (e) => {
    const book = e.target.value;

    setBook(book);
  };

  const handleonsubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apikey}`
      )
      .then((data) => {
        setResult(data.data.items);
        console.log(data);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Book Finder</h1>
      </div>

      <section className="search">
        <div className="container">
          <form className="form" onSubmit={handleonsubmit}>
            <input
              onChange={handleonchange}
              type="text"
              placeholder="Search books or authors"
            />
          </form>
        </div>
      </section>

      {result.map((book, index) => {
        return <Bookresult book={book} key={index} />;
      })}
    </>
  );
};

export default App;
