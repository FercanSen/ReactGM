import React from "react";

import { useNavigate } from "react-router-dom";
import "./MovieDetails.scss";

const MovieDetails = ({ movie, setSelectedMovie }) => {
  // Take movie as an object and destruct movie object to extract details
  const {
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres,
    id,
  } = movie;

  const navigate = useNavigate();

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={poster_path} alt={title} />
      </div>
      <div className="movie-info">
        <div className="movie-titlebar">
          <h2>{title}</h2>
          <button
            onClick={() => {
              navigate("/", { replace: true });
              setSelectedMovie(null);
            }}
          >
            Back to search
          </button>
        </div>
        <p>Release Year: {release_date}</p>
        <p>Rating: {vote_average}</p>
        <p>Duration: {runtime} minutes</p>
        <p>Description: {overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
