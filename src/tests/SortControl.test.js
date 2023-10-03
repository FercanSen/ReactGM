import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SortControl from "../components/SortControl/SortControl";

describe("SortControl Component", () => {
//   it("renders the component with initial selected option", () => {
//     const currentSelection = "Title";
//     const onSelectChange = jest.fn();

//     render(
//       <SortControl
//         currentSelection={currentSelection}
//         onSelectChange={onSelectChange}
//       />
//     );

//     const selectElement = screen.getByLabelText("Sort by:");
//     const selectedOption = screen.getByDisplayValue("Title");

//     expect(selectElement).toBeInTheDocument();
//     expect(selectedOption).toBeInTheDocument();
//     expect(selectedOption.selected).toBe(true);
//   });

  it("triggers the onSelectChange function when selecting a new option", () => {
    const currentSelection = "Release Date";
    const onSelectChange = jest.fn();

    render(
      <SortControl
        currentSelection={currentSelection}
        onSelectChange={onSelectChange}
      />
    );

    const selectElement = screen.getByLabelText("Sort by:");
    const titleOption = screen.getByDisplayValue("Title");

    fireEvent.change(selectElement, { target: { value: "Release Date" } });

    expect(onSelectChange).toHaveBeenCalledWith("Release Date");
    expect(titleOption.selected).toBe(false);
  });
});
