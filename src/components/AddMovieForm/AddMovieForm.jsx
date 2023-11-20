import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import MovieForm from "../MovieForm/MovieForm";

function AddMovieForm() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log("Submit is pressed");
    console.log("Form Values:");
    console.log(values);
    try {
      const movieData = {
        title: values.title || "movieTitle",
        tagline: values.tagline || "movieTagline",
        vote_average: parseFloat(values.rating) || 0,
        vote_count: parseFloat(values.vote_count) || 0,
        release_date: values.release_date || "movieReleaseDate",
        poster_path: values.movieURL || "movieURL",
        overview: values.overview || "movieOverview",
        budget: parseFloat(values.budget) || 0,
        revenue: parseFloat(values.revenue) || 0,
        runtime: parseFloat(values.runtime) || 0,
        genres: values.genre.split(" ") || "movieGenres",
      };

      const response = await axios.post(
        "http://localhost:4000/movies",
        movieData
      );
      console.log("Response:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <div>
      <MovieForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddMovieForm;
