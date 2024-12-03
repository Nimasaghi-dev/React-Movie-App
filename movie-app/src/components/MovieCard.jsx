import MovieControls from "./MovieControls";
import PropTypes from "prop-types";

export const MovieCard = ({ movie , type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            {movie.poster_path ? (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`} 
                />
            ) : (
                <div className="filler-poster"></div>
            )}

            <MovieControls type={type} movie={movie} />
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    }).isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieCard;
