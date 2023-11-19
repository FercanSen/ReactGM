import Header from "./components/Header/Header.jsx";
import MovieListPage from "./components/MovieListPage/MovieListPage.jsx";
import "./styles/App.scss";
import "./styles/add-movie-button.scss";
// import MovieDetails from "./components/MovieDetails/MovieDetails";
// import SortControl from "./components/SortControl/SortControl";

function App() {
  return (
    <div className="app">
      <div id="modal-root"></div>
      <Header />
      <MovieListPage />

      {/* <MovieForm
        onSubmit={() => {
          console.log("(onSubmit)) MovieForm is submitted");
        }}
      /> */}

      {/* <MovieDetails
        movie={{
          imageUrl: pulpFictionPoster,
          name: "Pulp Fiction",
          releaseYear: "2004",
          rating: "8.9",
          duration: "120",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet sapien tristique ipsum luctus tincidunt. Praesent ipsum urna, consectetur vitae tempus ac, efficitur eu elit. Fusce vel leo bibendum, euismod nulla placerat, scelerisque lorem. Proin vulputate interdum ligula vitae convallis. Nullam efficitur justo et nibh semper, ac molestie magna bibendum. Sed iaculis rhoncus ligula ut faucibus. Praesent tristique efficitur purus, auctor pellentesque turpis. Integer bibendum nisi sit amet neque placerat facilisis. Morbi scelerisque venenatis felis, a tempor sem rhoncus tincidunt. Ut lacus est, convallis gravida elementum efficitur, malesuada ac nibh. Mauris et lectus et tortor aliquam pretium eget sed neque. Vivamus et eros ornare, ultricies justo vel, rutrum ex. Ut eget augue sed quam interdum mattis.",
        }}
      /> */}
    </div>
  );
}

export default App;
