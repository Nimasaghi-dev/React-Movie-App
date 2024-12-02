import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const MovieControls = ({ movie , type}) => {
    const { removeMovieFromWatchList ,
            addMovieToWatched ,
            moveToWatchList ,
            removeFromWatched } = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "watchList" && (
                <>
                    <button className="ctrl-btn" 
                    onClick={() => addMovieToWatched(movie)}>
                        <i className="fas fa-eye"></i> {/* Watched Icon */}
                    </button>
                    <button className="ctrl-btn" 
                    onClick={() => removeMovieFromWatchList(movie.id)}>
                        <i className="fas fa-times"></i> {/* Cross Icon */}
                    </button>
                </>
            )}

            {type === "watched" && 
                (
                    <>
                        <button className="ctrl-btn" 
                    onClick={() => moveToWatchList(movie)}>
                        <i className="fas fa-eye-slash"></i> 
                    </button>
                        <button className="ctrl-btn" 
                    onClick={() => removeFromWatched(movie.id)}>
                        <i className="fas fa-times"></i>
                    </button>
                    </>
                )}
        </div>
    )
}

export default MovieControls;
