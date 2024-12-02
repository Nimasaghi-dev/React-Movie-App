export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched],
            }
        default:
            return state;
    }
};