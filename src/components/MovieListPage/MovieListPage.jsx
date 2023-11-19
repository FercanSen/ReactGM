import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieTile from "../MovieTile/MovieTile";

import GenreSelect from "../GenreSelect";
import SortControl from "../SortControl/SortControl";
import "./MovieListPage.scss";

function MovieListPage() {
  //   const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState("Release Date");
  const [activeGenre, setActiveGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch Movies
        const response = await axios.get("http://localhost:4000/movies");
        setMovieList(response.data.data);

        // Fetch Genres
        const genres = response.data.data.map((movie) => movie.genres).flat(); // Extract genres
        const uniqueGenres = Array.from(new Set(genres)); // Get unique genres

        setGenreList(uniqueGenres);
      } catch (error) {
        console.error("Error ocurred fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSortChange = (selectedOption) => {
    setSortCriterion(selectedOption);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log("Selected movie:", movie);
  };
  const handleGenreSelect = (genre) => {
    setActiveGenre(genre);
  };

  return (
    <>
      <SortControl
        currentSelection={sortCriterion}
        onSelectChange={handleSortChange}
      />
      <GenreSelect
        genres={genreList}
        selectedGenre={activeGenre}
        onSelect={handleGenreSelect}
      />
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
