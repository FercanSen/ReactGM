import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import GenreList from "../components/GenreSelect";

describe("GenreList Component", () => {
  it("renders all genres passed in props", () => {
    const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror"];
    const { getAllByRole } = render(
      <GenreList genres={genres} selectedGenre={null} onSelect={() => {}} />
    );
    const genreButtons = screen.getAllByRole("button");

    expect(genreButtons).toHaveLength(genres.length);

    genres.forEach((genre, index) => {
      expect(genreButtons[index]).toHaveTextContent(genre);
    });
  });

  it("highlights a selected genre passed in props", () => {
    const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror"];
    const selectedGenre = "Adventure";
    const { getByText } = render(
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={() => {}}
      />
    );
    const selectedButton = screen.getByText(selectedGenre);

    expect(selectedButton).toHaveClass("selectedGenre");
  });

  it("calls the onChange callback with the correct genre after clicking a genre button", () => {
    const genres = ["Action", "Adventure", "Comedy", "Drama"];
    const mockOnChange = jest.fn();
    render(
      <GenreList genres={genres} selectedGenre={null} onSelect={mockOnChange} />
    );
    const genreToSelect = "Comedy";
    const genreButton = screen.getByText(genreToSelect);

    fireEvent.click(genreButton);

    expect(mockOnChange).toHaveBeenCalledWith(genreToSelect);
  });
});
