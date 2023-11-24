import { action } from "@storybook/addon-actions";
import React from "react";
import MovieForm from "../MovieForm/MovieForm.jsx";
import Dialog from "./Dialog.jsx.jssx";

export default {
  title: "ReactGM/Dialog",
  component: Dialog,
};

export const TestDialog = (args) => (
  <div>
    <Dialog title={args.title} onClose={args.onClose} {...args}>
      <div>{args.children}</div>
    </Dialog>
  </div>
);

export const AddMovieFormDialog = TestDialog.bind({});
export const EditMovieFormDialog = TestDialog.bind({});
export const DeleteMovieFormDialog = TestDialog.bind({});

AddMovieFormDialog.args = {
  title: "Add Movie",
  children: <MovieForm />,
  onClose: action("Close button clicked"),
};

const sampleMovieInfo = {
  title: "Lord of the Rings",
  releaseDate: "2004",
  movieURL: "",
  rating: "8.9",
  genre: "Action & Adventure",
  runtime: "120",
  overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sapien tristique ipsum luctus tincidunt. Praesent ipsum urna, consectetur vitae tempus ac, efficitur eu elit.",
};

EditMovieFormDialog.args = {
  title: "Edit Movie",
  children: <MovieForm initialMovieInfo={sampleMovieInfo} />,
  onClose: action("Close button clicked"),
};

DeleteMovieFormDialog.args = {
  title: "Delete Movie",
  children: (
    <div>
      <p>'Are you sure you want to delete this movie?'</p>
      <button>Confirm</button>
    </div>
  ),
  onClose: action("Close button clicked"),
};
