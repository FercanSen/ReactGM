import React, { useEffect, useState } from "react";
import searhButtonIcon from "../../assets/search.png";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import AppLogo from "../AppLogo/AppLogo";
import Dialog from "../Dialog/Dialog";
import "./Header.scss";

function Header({ searchQuery, setSearchQuery, onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    onClick(searchQuery);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header__background">
      <div className="header-upper">
        <AppLogo />
        <button className="add-movie-button" onClick={openModal}>
          + ADD MOVIE
        </button>
        {isModalOpen && (
          <Dialog
            title="Add Movie"
            children={<AddMovieForm closeModal={closeModal} />}
            onClose={closeModal}
          >
            <AddMovieForm />
          </Dialog>
        )}
      </div>
      <div className="header">
        <div className="header__main">
          <div className="header__main--column">
            <p>FIND YOUR MOVIE</p>
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
