import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const WatchList = () => {
    const { watchList } = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watch List</h1>
                </div>
                
            </div>
        </div>
    )
}

export default WatchList;
