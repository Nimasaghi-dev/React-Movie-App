import { createContext , useReducer , useEffect } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie , addMovieToWatchList });
}

const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
}

const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
}

const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
}

const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
}

    return (
        <GlobalContext.Provider 
            value={{ 
                    watchList: state.watchList,
                    watched: state.watched,
                    addMovieToWatchList,
                    removeMovieFromWatchList,
                    addMovieToWatched,
                    moveToWatchList,
                    removeFromWatched,
                }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

GlobalProvider.propTypes = {
    children: PropTypes.node
}
