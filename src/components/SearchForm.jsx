export default function SearchForm({ title, setTitle, year, setYear, type, setType, onSearch }) {
    return (
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search movies..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-md text-black flex-1"
        />
        <input
          type="number"
          min={0}
          max={2025}
          placeholder="Year (optional)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded-md text-black"
        >
          <option value="">All Types</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <button
          onClick={onSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    );
}  