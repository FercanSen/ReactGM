import React from "react";

import "./MovieDetails.scss";

const MovieDetails = ({ movie }) => {
  // Take movie as an object and destruct movie object to extract details
  const { imageUrl, name, releaseYear, rating, duration, description } =
    movie;
  console.log("This is the move: ");
  console.log(movie);
  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="movie-info">
        <h2>{name}</h2>
        <p>Release Year: {releaseYear}</p>
        <p>Rating: {rating}</p>
        <p>Duration: {duration} minutes</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
