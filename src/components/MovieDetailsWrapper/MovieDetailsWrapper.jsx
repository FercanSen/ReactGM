import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";

function MovieDetailsWrapper() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/movies/${movieId}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>{movie ? <MovieDetails movie={movie} /> : <div>Loading...</div>}</div>
  );
}

export default MovieDetailsWrapper;
