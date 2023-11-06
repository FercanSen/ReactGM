import React, { useEffect, useState } from "react";
import searhButtonIcon from "../../../assets/search.png";
import "./SearchBar.scss";

function SearchBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (windowWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  const handleClick = () => {
    console.log("Search button is clicked!");
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="What do you want to watch?"
      />
      <button className="searchbar__button" onClick={handleClick}>
        {isMobile ? (
          <img
            className="searchbar__button--mobile"
            src={searhButtonIcon}
            alt="search"
          />
        ) : (
          <p>SEARCH</p>
        )}
      </button>
    </div>
  );
}

export default SearchBar;
