import React, { useEffect, useState } from "react";

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
  // Use state to track form input values
  const [movieInfo, setMovieInfo] = useState(
    initialMovieInfo || {
      title: "",
      releaseDate: "",
      movieURL: "",
      rating: "",
      genre: "",
      runtime: "",
      overview: "",
    }
  );

  // Handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieInfo({ ...movieInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("movieInfo: ");
    console.log(movieInfo);
    onSubmit(movieInfo);
  };

  useEffect(() => {
    // Update form input values when initialMovieInfo prop changes
    if (initialMovieInfo) {
      setMovieInfo(initialMovieInfo);
    }
  }, [initialMovieInfo]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={movieInfo.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="releaseDate">Release Date:</label>
        <input
          type="number"
          id="releaseDate"
          name="releaseDate"
          value={movieInfo.releaseDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="movieURL">Movie URL:</label>
        <input
          type="text"
          id="movieURL"
          name="movieURL"
          value={movieInfo.movieURL}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={movieInfo.rating}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={movieInfo.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="runtime">Runtime:</label>
        <input
          type="text"
          id="runtime"
          name="runtime"
          value={movieInfo.runtime}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="overview">Overview:</label>
        <input
          type="text"
          id="overview"
          name="overview"
          value={movieInfo.overview}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
