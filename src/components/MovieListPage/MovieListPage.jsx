import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieTile from "../MovieTile/MovieTile";

import "./MovieListPage.scss";

function MovieListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState("");
  const [activeGenre, setActiveGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");
        setMovieList(response.data.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log("Selected movie:", movie);
  };

  return (
    <>
      <div className="movie-grid">
        {movieList.map((movie) => (
          <MovieTile
            key={movie.id}
            movieName={movie.title}
            url={movie.poster_path}
            releaseYear={movie.release_date.split("-")[0]}
            genreList={movie.genres.join(", ")}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </>
  );
}

export default MovieListPage;
