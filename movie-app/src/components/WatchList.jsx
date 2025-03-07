import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";


const WatchList = () => {
    const { watchList } = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watch List</h1>

                    <span className="count-pill">{watchList.length} {watchList.length === 1 ? 'Movie' : 'Movies'}</span>
                </div>

                {watchList.length > 0 ? (
                    <div className="movie-grid">
                    {watchList.map(movie => (
                        <MovieCard 
                            key={movie.id}
                            movie={movie} 
                            type="watchList"
                        />
                    ))}
                </div>
                ) : (
                    <h2 className="no-movies">No movies in your List, add some!</h2>
                )}
            </div>
        </div>
    );
};

export default WatchList;
