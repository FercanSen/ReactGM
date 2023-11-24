import { render, screen } from "@testing-library/react";
import React from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";

describe("MovieDetails Component", () => {
  const mockMovie = {
    imageUrl: "https://example.com/poster.jpg",
    name: "Test Movie",
    releaseYear: "2023",
    rating: "8.5",
    duration: "120",
    description: "This is a test movie.",
  };

  it("renders the movie details correctly", () => {
    render(<MovieDetails movie={mockMovie} />);

    // Check if the movie name is rendered
    expect(screen.getByText("Test Movie")).toBeInTheDocument();

    // Check if release year, rating, duration, and description are rendered
    expect(screen.getByText("Release Year: 2023")).toBeInTheDocument();
    expect(screen.getByText("Rating: 8.5")).toBeInTheDocument();
    expect(screen.getByText("Duration: 120 minutes")).toBeInTheDocument();
    expect(
      screen.getByText("Description: This is a test movie.")
    ).toBeInTheDocument();

    // Check if the movie poster image is rendered with the alt text
    expect(screen.getByAltText("Test Movie")).toBeInTheDocument();
    expect(screen.getByAltText("Test Movie")).toHaveAttribute(
      "src",
      "https://example.com/poster.jpg"
    );
  });
});
