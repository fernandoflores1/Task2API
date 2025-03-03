import { useState } from "react";
import { useMovieSearch } from "./services/useMovieSearch";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

export default function MovieSearchApp() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const { movies, searchMovies, isLoading, error } = useMovieSearch();

  const handleSearch = () => {
    if (title.trim() !== "") {
      searchMovies(title, year, type);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Movie Search App</h1>
      <SearchForm 
        title={title} setTitle={setTitle}
        year={year} setYear={setYear}
        type={type} setType={setType}
        onSearch={handleSearch}
      />
      {isLoading && <div className="loader"></div>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}