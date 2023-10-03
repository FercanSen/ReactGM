import "./App.scss";
// import Counter from "./components/Counter";

// import { useState } from "react";
// import SearchBar from "./components/SearchBar";

// import GenreSelect from "./components/GenreSelect";
// import TestingComponent from "./components/Test";
import MovieTile from "./components/MovieTile/MovieTile";
import pulpFiction from "./assets/pulp-fiction.png";

function App() {
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (query) => {
  //   setSearchResults([query]);
  // };

  // const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror"];
  // const [selectedGenre, setSelectedGenre] = useState("");

  // const handleGenreSelect = (genre) => {
  //   setSelectedGenre(genre);
  //   console.log(genre);
  // };

  return (
    <div className="app">
      {/* <Counter />
      <div>
        <h1>Search App</h1>
        <SearchBar initialSearchQuery="" onSearch={handleSearch} />
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      <h1>Movie Genres</h1>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
      <TestingComponent name="Fercan" surname="Şen" /> */}
      <MovieTile
        url={pulpFiction}
        movieName={"Pulp Fiction"}
        releaseYear={2004}
        genreList={"Action, Drama"}
      />
    </div>
  );
}

export default App;
