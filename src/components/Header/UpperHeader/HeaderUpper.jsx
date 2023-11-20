import React, { useState } from "react";
import AddMovieForm from "../../AddMovieForm/AddMovieForm";
import AppLogo from "../../AppLogo/AppLogo";
import Dialog from "../../Dialog/Dialog";
import "./HeaderUpper.scss";

function HeaderUpper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header-upper">
      <AppLogo />
      <button className="add-movie-button" onClick={openModal}>
        + ADD MOVIE
      </button>
      {isModalOpen && (
        <Dialog
          title="Add Movie"
          children={<AddMovieForm />}
          onClose={closeModal}
        >
          <AddMovieForm />
        </Dialog>
      )}
    </div>
  );
}

export default HeaderUpper;
