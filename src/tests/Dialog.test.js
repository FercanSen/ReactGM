import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Dialog from "../components/Dialog/Dialog.jsx";

describe("Dialog component", () => {
  let modalRoot;

  beforeEach(() => {
    // Create a div element to use as the modal root in the test environment
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    // Clean up: remove the modal root element after each test
    document.body.removeChild(modalRoot);
  });

  it("renders with title and children", () => {
    const title = "Test Title";
    const handleClose = jest.fn();

    render(
      <Dialog title={title} onClose={handleClose}>
        <div>Test Content</div>
      </Dialog>
    );

    const modalTitle = screen.getByText(title);
    expect(modalTitle).toBeInTheDocument();

    const modalContent = screen.getByText("Test Content");
    expect(modalContent).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();

    render(
      <Dialog title="Test" onClose={handleClose}>
        <div>Test Content</div>
      </Dialog>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });
});
