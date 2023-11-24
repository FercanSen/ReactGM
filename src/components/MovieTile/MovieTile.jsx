import React from "react";
// import "./MovieTile.scss";

function MovieTile({ url, movieName, releaseYear, genreList, onClick }) {
  return (
    <div className="movie-tile" onClick={onClick}>
      <div className="movie-tile__image">
        <img src={url} alt="film-poster" />
      </div>
      <div className="movie-tile__description">
        <div className="movie-tile__description__upper">
          <div className="movie-tile__description__title">{movieName}</div>
          <div className="movie-tile__description__year">{releaseYear}</div>
        </div>
        <div className="movie-tile__description__genres">{genreList}</div>
      </div>
    </div>
  );
}

export default MovieTile;
