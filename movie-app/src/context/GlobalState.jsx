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
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
    return (
        <GlobalContext.Provider value={{ watchList: state.watchList , watched: state.watched }}>
            {props.children}
        </GlobalContext.Provider>
    )
}