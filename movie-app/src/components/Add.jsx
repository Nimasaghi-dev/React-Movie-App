import { useState } from 'react';
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        setError(null);

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch movies. Please try again.');
                }
                return res.json();
            })
            .then((data) => {
                if (data.errors || !data.results.length) {
                    setResults([]);
                    setError('No movies found. Try another search term.');
                } else {
                    setResults(data.results);
                }
            })
            .catch((err) => {
                setResults([]);
                setError(err.message);
            });
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a movie..."
                            value={query}
                            onChange={onChange}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Add;
