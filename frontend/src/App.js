import './App.css';
import Header from './header/index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Search from './search/index'
import Home from './Home/index'
import MovieDetails from './movieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/movies/movie-title" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
