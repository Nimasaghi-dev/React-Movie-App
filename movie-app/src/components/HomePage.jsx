import { useState , useEffect } from "react";

const HomePage = () => {
    const [randomMovies, setRandomMovies] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomMovies = async () => {
            try {
                const randomePage = Math.floor(Math.random() * 500) + 1;
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomePage}`
                );
                const data = await response.json();
                setRandomMovies(data.results); // store movies in state
            } catch (error) {
                console.error("Error fetching random movies:",error);
            } finally {
                setLoading(false); // stop loading spinner
            }
        };
        fetchRandomMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // display loading msg
    }

    return (
        <div>
            <h1>Random Movies</h1>
            <ul>
                {randomMovies.map((movie) => (
                    <li key={movie.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                            alt={movie.title} 
                        />
                        <p>{movie.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
