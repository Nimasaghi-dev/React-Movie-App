import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched Movies</h1>
                    <span className="count-pill">{watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}</span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map(movie => (
                            <MovieCard 
                                key={movie.id}
                                movie={movie} 
                                type="watched"
                            />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your List, add some!</h2>
                )}
            </div>
        </div>
    );
}

export default Watched;
