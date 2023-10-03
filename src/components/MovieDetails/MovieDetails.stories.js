import MovieDetails from "./MovieDetails";

import imageUrl from "../../assets/pulp-fiction.png";

export default {
  title: "ReactGM/MovieDetails",
  component: MovieDetails,
};

export const MovieDetailsExample = (args) => <MovieDetails {...args} />;

export const MovieDetailsExampleArgs = MovieDetailsExample.bind({});

MovieDetailsExampleArgs.args = {
  movie: {
    imageUrl: imageUrl,
    name: "Pulp Fiction",
    releaseYear: "2004",
    rating: "8.9",
    duration: "120",
    description: "This is a sample movie description",
  },
};
