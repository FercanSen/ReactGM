import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  it("renders an input with the value equal to the initial value passed in props", () => {
    const { getByPlaceholderText } = render(
      <SearchBar initialSearchQuery="Initial Value" />
    );
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toHaveValue("Initial Value");
  });

  it("calls the onChange prop with the proper value after clicking the Submit button", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar initialSearchQuery="" onSearch={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    const submitButton = screen.getByText("Search");

    fireEvent.change(inputElement, { target: { value: "Test Value" } });
    fireEvent.click(submitButton);

    expect(mockOnChange).toHaveBeenCalledWith("Test Value");
  });

  it("calls the onChange prop with the proper value after pressing the Enter key", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar initialSearchQuery="" onSearch={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "Test Value" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith("Test Value");
  });
});
