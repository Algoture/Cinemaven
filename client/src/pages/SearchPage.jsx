import React, { useEffect, useState, useRef } from "react";
import { API_url_Trending, options } from "../utils/Constants";
import { Nav } from "../Index";
import moviesData from "../utils/Data";
const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  // const fetchedData = useRef(false);

  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === "") {
      setSuggestions([]);
      return;
    }
    const matches = movies.filter((trailer) =>
      trailer.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setSuggestions([]);
  };

  const searchTrailers = () => {
    const results = movies.filter((trailer) =>
      trailer.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <Nav />

      <div className="searchPage">
        {/* <h1>Search Movies</h1> */}
        <div className="left">
          <div className="input">
            <input
              type="text"
              placeholder="Search movies by title..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={searchTrailers}>Search</button>
          </div>
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.title)}
                >
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="right">
          {loading ? (
            <div style={{ fontWeight: 700, fontSize: "1.5vw" }}>Loading...</div>
          ) : (
            <div>
              {searchResults.length > 0 ? (
                <div>
                  {searchResults.map((trailer, index) => (
                    <div className="results" key={index}>
                      <img
                        src={trailer.image}
                        alt={trailer.title}
                        className="movie-poster"
                      />
                      <div className="movie-details">
                        <div className="title">
                          <h3>{trailer.title}</h3>
                          <p>Release Date: {trailer.releaseDate}</p>
                        </div>
                        <button className="searchBtn">
                          <a
                            href={trailer.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch Trailer
                          </a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontWeight: 700, fontSize: "1.5vw" }}>
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
