import React from "react";
import { render, screen } from "@testing-library/react";
import MovieTile from "../components/MovieTile/MovieTile";

describe("MovieTile Component", () => {
  it("renders movie details correctly", () => {
    const mockMovie = {
      url: "https://example.com/poster.jpg",
      movieName: "Test Movie",
      releaseYear: "2023",
      genreList: "Action, Adventure",
    };

    render(
      <MovieTile
        url={mockMovie.url}
        movieName={mockMovie.movieName}
        releaseYear={mockMovie.releaseYear}
        genreList={mockMovie.genreList}
      />
    );

    // Check if movie name, release year, and genre list are rendered
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("Action, Adventure")).toBeInTheDocument();

    // Check if the movie poster image is rendered with the alt text
    expect(screen.getByAltText("film-poster")).toBeInTheDocument();
    expect(screen.getByAltText("film-poster")).toHaveAttribute(
      "src",
      "https://example.com/poster.jpg"
    );
  });
});
