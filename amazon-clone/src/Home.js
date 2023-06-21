import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61s5QLgMYGL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="111111"
            title="URBAN WOLF Business Casual Multipurpose 30L"
            price={799}
            image="https://m.media-amazon.com/images/I/71BPZt+wTzL._UX679_.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
