import React from "react";
import "./Header.scss";
import HeaderUpper from "./UpperHeader/HeaderUpper";
import SearchBar from "./SearchBar/Searchbar";

function Header() {
  return (
    <header className="header__background">
      <HeaderUpper />
      <div className="header">
        <div className="header__main">
          <div className="header__main--column">
            <p>FIND YOUR MOVIE</p>
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
