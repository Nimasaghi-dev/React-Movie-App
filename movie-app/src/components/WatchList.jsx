import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchList = () => {
    const { watchList } = useContext(GlobalContext);
    return (
        <div>
            {watchList.map(movie => {
                return(
                <h1>{movie.title}</h1>
                )
            })}
        </div>
    )
}

export default WatchList;
