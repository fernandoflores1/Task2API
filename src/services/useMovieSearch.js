import { useState, useRef } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=27e68f60";

export function useMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastQueryRef = useRef({ query: "", year: "", type: "" });

  const searchMovies = async (query, year, type) => {
    if (query === lastQueryRef.current.query && year === lastQueryRef.current.year && type === lastQueryRef.current.type) {
      return;
    }

    setIsLoading(true);
    setError(null);
    lastQueryRef.current = { query, year, type };

    let url = `${API_URL}&s=${query}`;
    if (year) url += `&y=${year}`;
    if (type && type !== "") url += `&type=${type}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search.map(movie => ({
            ...movie
          })));
        } else {
          setMovies([]);
          setError(data.Error);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return { movies, searchMovies, isLoading, error };
}