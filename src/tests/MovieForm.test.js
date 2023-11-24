import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import MovieForm from "../components/MovieForm/MovieForm.jsx";

describe("MovieForm component", () => {
  const mockSubmit = jest.fn();

  const initialMovieInfo = {
    title: "Test Title",
    releaseDate: 2023,
    movieURL: "http://test-url.com",
    rating: "PG-13",
    genre: "Action",
    runtime: "120 mins",
    overview: "Test movie overview",
  };

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  it("renders form fields with initial values", () => {
    render(
      <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={mockSubmit} />
    );

    expect(screen.getByLabelText("Title:")).toHaveValue(initialMovieInfo.title);
    expect(screen.getByLabelText("Release Date:")).toHaveValue(
      initialMovieInfo.releaseDate
    );
    // Add similar assertions for other input fields
  });

  it("updates state when input values change", () => {
    render(
      <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={mockSubmit} />
    );

    const titleInput = screen.getByLabelText("Title:");
    fireEvent.change(titleInput, { target: { value: "New Title" } });

    expect(titleInput).toHaveValue("New Title");
    // Add similar assertions for other input fields
  });

  it("calls onSubmit prop when form is submitted", () => {
    render(
      <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={mockSubmit} />
    );

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith(initialMovieInfo);
  });
});
