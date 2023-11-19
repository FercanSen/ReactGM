import React, { useEffect, useState } from "react";
import searhButtonIcon from "../../../assets/search.png";
import "./SearchBar.scss";

function SearchBar({ onClick }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    onClick(searchQuery); // Trigger the search functionality in the parent component
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="What do you want to watch?"
        value={searchQuery}
        onChange={handleChange}
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
