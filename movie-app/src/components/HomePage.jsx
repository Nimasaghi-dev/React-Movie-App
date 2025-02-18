import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieControls from "./MovieControls";
import "../App.css";

const HomePage = () => {
    const [randomMovies, setRandomMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { watchList, watched } = useContext(GlobalContext);

    const fetchRandomMovies = async () => {
        try {
            setLoading(true);
            const randomPage = Math.floor(Math.random() * 500) + 1;
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`
            );
            console.log(import.meta.env.VITE_TMDB_KEY);

            const data = await response.json();

            setRandomMovies(data.results);
        } catch (error) {
            console.error("Error fetching random movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomMovies();
    }, []); 

    const isInWatchList = (id) => watchList.some((movie) => movie.id === id);
    const isInWatched = (id) => watched.some((movie) => movie.id === id);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-page">
            {/* <h1>Home</h1> */}
            <button onClick={fetchRandomMovies} className="refresh-btn">Refresh Random Movies</button>
            <div className="movie-grid">
                {randomMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
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
        </div>
    );
};

export default HomePage;
