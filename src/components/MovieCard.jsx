const DEFAULT_POSTER = "https://media.istockphoto.com/id/1055079680/es/vector/c%C3%A1mara-lineal-negro-como-ninguna-imagen-disponible.jpg?s=612x612&w=0&k=20&c=mYv5-3x668712KVHFnzZX2Tvb_DEQ2Ka7dDwOkTp9Q8=";

export default function MovieCard({ movie }) {
  const posterSrc = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : DEFAULT_POSTER;

  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <img 
        src={posterSrc} 
        alt={movie.Title} 
        className="w-full object-cover rounded-md" 
      />
      <h2 className="text-lg text-white font-semibold mt-2">{movie.Title}</h2>
      <p className="text-gray-400">{movie.Year}</p>
    </div>
  );
}