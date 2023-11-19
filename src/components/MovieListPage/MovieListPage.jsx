import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieTile from "../MovieTile/MovieTile";

import GenreSelect from "../GenreSelect";
import SearchBar from "../Header/SearchBar/Searchbar";
import MovieDetails from "../MovieDetails/MovieDetails";
import SortControl from "../SortControl/SortControl";
import "./MovieListPage.scss";

function MovieListPage() {
  const [sortCriterion, setSortCriterion] = useState("Title");
  const [activeGenre, setActiveGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");
        setMovieList(response.data.data);

        const genres = response.data.data.map((movie) => movie.genres).flat();
        const uniqueGenres = Array.from(new Set(genres));
        setGenreList(uniqueGenres);
      } catch (error) {
        console.error("Error occurred fetching movies:", error);
      }
    };

    fetchMovies();
  }, [sortCriterion, activeGenre]);

  useEffect(() => {
    let filtered = [...movieList];

    if (activeGenre) {
      filtered = filtered.filter((movie) => movie.genres.includes(activeGenre));
    }

    if (sortCriterion === "Release Date") {
      filtered.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
    } else if (sortCriterion === "Title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredMovies(filtered);
  }, [movieList, activeGenre, sortCriterion]);

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

  const handleSearch = (searchValue) => {
    console.log(searchValue);
    const matchingMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(matchingMovies);
  };

  console.log(selectedMovie);

  return (
    <>
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      ) : (
        <div className="searchbar">
          <SearchBar onClick={handleSearch} />
        </div>
      )}

      <div className="genre-sort">
        <GenreSelect
          genres={genreList}
          selectedGenre={activeGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          currentSelection={sortCriterion}
          onSelectChange={handleSortChange}
        />
      </div>

      <div className="movie-grid">
        {filteredMovies.length > 0
          ? filteredMovies.map((movie) => (
              <MovieTile
                key={movie.id}
                movieName={movie.title}
                url={movie.poster_path}
                releaseYear={movie.release_date.split("-")[0]}
                genreList={movie.genres.join(", ")}
                onClick={() => handleMovieClick(movie)}
              />
            ))
          : movieList.map((movie) => (
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
