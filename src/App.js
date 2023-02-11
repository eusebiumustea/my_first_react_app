import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Card from "./Card";
import axios from "axios";
// 80743ac8
const API_URL = "https://www.omdbapi.com?apikey=80743ac8";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (Title) => {
    const {
      data: { Search },
    } = await axios.get(`${API_URL}&s=${Title}`);
    setMovies(Search);
  };
  console.log(movies);
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search the movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="searchicon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="emty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
