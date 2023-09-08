import "./App.css";
import Counter from "./components/Counter";

import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchResults([query]);
  };

  return (
    <div>
      <Counter />
      <div>
        <h1>Search App</h1>
        <SearchBar initialSearchQuery="" onSearch={handleSearch} />
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
