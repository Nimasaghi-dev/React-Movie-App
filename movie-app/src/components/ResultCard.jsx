import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PropTypes from "prop-types";

export const ResultCard = ({ movie }) => {
    const {
        addMovieToWatchList,
        addMovieToWatched,
        watchList,
        watched
    } = useContext(GlobalContext);

    let storedMovie = watchList.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);

    const watchListDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}
                />
            ) : (
                <div className="filler-poster"></div>
            )}
            
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</p>
            </div>

            <div className="inner-card-controls">
                {!watchListDisabled && (
                    <button 
                        className="ctrl-btn"
                        onClick={() => addMovieToWatchList(movie)}
                    >
                        <i className="fa-fw far fa-bookmark"></i>
                    </button>
                )}

                {!watchedDisabled && (
                    <button 
                        className="ctrl-btn"
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

ResultCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired, 
        poster_path: PropTypes.string, 
        release_date: PropTypes.string, 
    }).isRequired, 
};

export default ResultCard;