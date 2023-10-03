import MovieTile from "./MovieTile";

import imageUrl from "../../assets/pulp-fiction.png"

export default {
  title: "ReactGM/MovieTile",
  component: MovieTile,
};

export const MovieTileExample = (args) => <MovieTile {...args} />;

export const MovieTileExampleArgs = MovieTileExample.bind({});

MovieTileExampleArgs.args = {
  url: imageUrl,
  movieName: "Pulp Fiction",
  releaseYear: 2004,
  genreList: ["Action", "Adventure"],
};
