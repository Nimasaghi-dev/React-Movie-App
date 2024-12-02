import { createContext , useReducer , useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
    
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

// Actions
const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie , addMovieToWatchList });
}

const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
}

const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
}

    return (
        <GlobalContext.Provider 
            value={{ 
                    watchList: state.watchList,
                    watched: state.watched,
                    addMovieToWatchList,
                    removeMovieFromWatchList,
                    addMovieToWatched,
                }}>
            {props.children}
        </GlobalContext.Provider>
    )
}