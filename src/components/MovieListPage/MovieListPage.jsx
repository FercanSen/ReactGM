import axios from "axios";
import React, { useEffect, useState } from "react";
import pulpFictionPoster from "../../assets/pulp-fiction.png";
import MovieTile from "../MovieTile/MovieTile";

import "./MovieListPage.scss";

function MovieListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(""); // You can set a default sort criterion if needed
  const [activeGenre, setActiveGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");
        setMovieList(response.data.data);
        console.log("Movie List: ");
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);
  console.log(movieList);

  return (
    <div className="movie-grid">
      {movieList.map((movie) => (
        <MovieTile
          key={movie.id}
          movieName={movie.title}
          url={movie.poster_path}
          releaseYear={movie.release_date}
          genreList={movie.genres.join(", ")}
        />
      ))}
    </div>
  );
}

export default MovieListPage;
