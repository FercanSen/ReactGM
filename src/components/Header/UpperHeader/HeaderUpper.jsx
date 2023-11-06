import React from "react";
import AppLogo from "../../AppLogo/AppLogo";
import "./HeaderUpper.scss";

function HeaderUpper() {
  return (
    <div className="header-upper">
      <AppLogo />
      <button className="add-movie-button">+ ADD MOVIE</button>
    </div>
  );
}

export default HeaderUpper;
