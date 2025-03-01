import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieControls from "./MovieControls";
import "../App.css";

const HomePage = () => {
    const [randomMovies, setRandomMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { watchList, watched } = useContext(GlobalContext);
    
    // Reference for intersection observer
    const observer = useRef();
    // Reference for the last movie element
    const lastMovieRef = useCallback(node => {
        if (loading) return;
        
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    const fetchMovies = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`
            );
            
            const data = await response.json();
            
            if (pageNumber === 1) {
                setRandomMovies(data.results);
            } else {
                setRandomMovies(prev => [...prev, ...data.results]);
            }
            
            setHasMore(data.page < data.total_pages);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchMovies(1);
    }, []);

    // Load more when page changes
    useEffect(() => {
        if (page > 1) {
            fetchMovies(page);
        }
    }, [page]);

    const isInWatchList = (id) => watchList.some((movie) => movie.id === id);
    const isInWatched = (id) => watched.some((movie) => movie.id === id);

    // Refresh function now resets to page 1
    const handleRefresh = () => {
        setPage(1);
        fetchMovies(1);
    };

    return (
        <div className="movie-page">
            {/* <h1>Home</h1> */}
            <button onClick={handleRefresh} className="refresh-btn">
                <i className="fas fa-sync-alt"></i> Discover Movies
            </button>
            <div className="movie-grid">
                {randomMovies.map((movie, index) => (
                    <div 
                        key={movie.id} 
                        ref={index === randomMovies.length - 1 ? lastMovieRef : null}
                        className="movie-card"
                    >
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                    : "https://via.placeholder.com/200x300"
                            }
                            alt={movie.title}
                        />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                        <MovieControls
                            movie={movie}
                            type={
                                isInWatchList(movie.id)
                                    ? "watchList"
                                    : isInWatched(movie.id)
                                    ? "watched"
                                    : null
                            }
                        />
                    </div>
                ))}
            </div>
            {loading && (
                <div className="loading-more">
                    <div className="loader"></div>
                    <p>Loading more movies...</p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
