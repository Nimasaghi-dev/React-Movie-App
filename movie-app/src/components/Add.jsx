import React, { useState } from 'react'

const Add = () => {
    const [query, setQuery] = useState(""); 

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value); 

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_TMDB_KEY
            }&language=en-US&query=${e.target.value}&page=1&include_adult=false`
        )
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
                </div>
            </div>
        </div>
    )
}

export default Add