import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  it("renders initial value provided in props", () => {
    render(<Counter initialValue={5} />);
    const valueElement = screen.getByText("Value: 5");
    expect(valueElement).toBeInTheDocument();
  });

  it('clicking "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);

    const valueElement = screen.getByText("Value: 4");
    expect(valueElement).toBeInTheDocument();
  });

  it('clicking "increment" button increments the displayed value', () => {
    render(<Counter initialValue={5} />);
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);

    const valueElement = screen.getByText("Value: 6");
    expect(valueElement).toBeInTheDocument();
  });
});
