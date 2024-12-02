import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie , type}) => {
    const { removeMovieFromWatchList } = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "watchList" && (
                <>
                    <button className="ctrl-btn">
                        <i className="fas fa-eye"></i> {/* Watched Icon */}
                    </button>
                    <button className="ctrl-btn" 
                    onClick={() => removeMovieFromWatchList(movie.id)}>
                        <i className="fas fa-times"></i> {/* Cross Icon */}
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls;
