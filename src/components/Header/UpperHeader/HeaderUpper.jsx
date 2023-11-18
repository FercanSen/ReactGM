import React, { useState } from "react";
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
        <Dialog title="Modal Title" onClose={closeModal}>
          <p>This is some custom content for your modal.</p>
        </Dialog>
      )}
    </div>
  );
}

export default HeaderUpper;
