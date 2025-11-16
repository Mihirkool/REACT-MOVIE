import"../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
  return( 
  <div className="favorites">
    <h2>Your favourites</h2>
    <div className="movie-grid">
        {favorites.map((movie) => (  
            <MovieCard movie = {movie} key={movie.id} />
        ))}
    </div>
    </div>
  );
  }
  return (
    <div className="favorites-empty">
      <h2>No favourite movies yet</h2>
      <p>
        Start adding movies to your favorites and they will appear here
      </p>
    </div>
  );
}

export default Favorites;
