import { createContext , useReducer , useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    watchList: [],
    watched: [],
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie , addMovieToWatchList });
}

    return (
        <GlobalContext.Provider 
            value={{ 
                    watchList: state.watchList,
                    watched: state.watched,
                    addMovieToWatchList,
                }}>
            {props.children}
        </GlobalContext.Provider>
    )
}