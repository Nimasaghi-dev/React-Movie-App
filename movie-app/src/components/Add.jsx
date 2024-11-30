import React, { useState } from 'react'
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery] = useState(""); 
    const [results, setResults] = useState([]); // empty array will be the initial state

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value); 

        fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
    }

    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper"> 
                        <input type="text" 
                            placeholder='Search for a movie...'
                            value={query}  
                            onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map(movie => (
                                <li key={movie.id}>
                                <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add
