import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/Header/SearchBar/Searchbar.jsx";
import MovieDetailsWrapper from "./components/MovieDetailsWrapper/MovieDetailsWrapper.jsx";
import MovieListPage from "./components/MovieListPage/MovieListPage.jsx";
import "./styles/App.scss";
import "./styles/add-movie-button.scss";

function App() {
  return (
    <div className="app">
      <div id="modal-root"></div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListPage />}>
            <Route index element={<SearchBar />} />
            <Route path=":movieId" element={<MovieDetailsWrapper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
