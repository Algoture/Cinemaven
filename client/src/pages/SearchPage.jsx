import React, { useEffect, useState } from "react";
import { Nav } from "../Index";
const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("trendingMovies");
    if (storedData) {
      setMovies(JSON.parse(storedData));
      setLoading(false);
    } else {
    }
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
        <input
          type="text"
          placeholder="Search trailers by title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={searchTrailers}>Search</button>
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
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {searchResults.length > 0 ? (
              <div>
                {searchResults.map((trailer, index) => (
                  <div key={index}>
                    <img
                      src={trailer.image}
                      alt={trailer.title}
                      className="movie-poster"
                    />
                    <h3>{trailer.title}</h3>
                    <p style={{ color: "black" }}>
                      Release Date: {trailer.releaseDate}
                    </p>
                    <button>
                      <a
                        href={trailer.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Trailer
                      </a>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>No results found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
