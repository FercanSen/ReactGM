import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieTile from "../MovieTile/MovieTile";

import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import GenreSelect from "../GenreSelect";
import Header from "../Header/Header";
import SearchBar from "../Header/SearchBar/Searchbar";
import MovieDetails from "../MovieDetails/MovieDetails";
import SortControl from "../SortControl/SortControl";
import "./MovieListPage.scss";

function MovieListPage() {
  const navigate = useNavigate();
  const [sortCriterion, setSortCriterion] = useState("Title");
  const [activeGenre, setActiveGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [sortedFilms, setSortedFilms] = useState([]);
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = searchParams.get("query") || "";
  const sortByParam = searchParams.get("sortBy") || "";
  const genreParam = searchParams.get("genre") || "";

  useEffect(() => {
    setSearchQuery(queryParam);
    setSortCriterion(sortByParam);
    setActiveGenre(genreParam);
  }, [queryParam, sortByParam, genreParam]);

  useEffect(() => {
    if (queryParam) {
      const matchingMovies = movieList.filter((movie) =>
        movie.title.toLowerCase().includes(queryParam.toLowerCase())
      );
      setSearchedFilms(matchingMovies);
    } else {
      // Reset searched movies if no query is provided
      setSearchedFilms(movieList);
    }
  }, [queryParam, movieList]);

  useEffect(() => {
    // Fetch Movies
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
  }, []);

  useEffect(() => {
    // Sort films
    let sorted = [...movieList];

    if (activeGenre) {
      sorted = sorted.filter((movie) => movie.genres.includes(activeGenre));
    }

    if (sortCriterion === "Release Date") {
      sorted.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
    } else if (sortCriterion === "Title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSortedFilms(sorted);
  }, [movieList, activeGenre, sortCriterion]);

  const handleSortChange = (selectedOption) => {
    setSortCriterion(selectedOption);
    setSearchParams({ sortBy: selectedOption });
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    console.log("Selected movie:", movie);
    navigate(`/${movie.id}`, { replace: true });
  };

  const handleGenreSelect = (genre) => {
    setActiveGenre(genre);
    setSearchParams({ genre: genre });
  };

  const handleSearch = (searchValue) => {
    console.log("Searched value:", searchValue);
    console.log("queryParam");
    console.log(queryParam);
    setSearchParams({ query: searchValue });
    const matchingMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSortedFilms(matchingMovies);
  };

  return (
    <>
      {/* <Outlet /> */}
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      ) : (
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClick={handleSearch}
        />
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
        {queryParam
          ? searchedFilms.map((movie) => (
              <MovieTile
                key={movie.id}
                movieName={movie.title}
                url={movie.poster_path}
                releaseYear={movie.release_date.split("-")[0]}
                genreList={movie.genres.join(", ")}
                onClick={() => handleMovieClick(movie)}
              />
            ))
          : sortedFilms.length > 0
          ? sortedFilms.map((movie) => (
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
