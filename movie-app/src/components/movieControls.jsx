

export const MovieControls = ({ movie , type}) => {
    return (
        <div className="inner-card-controls">
            {type === "watchList" && (
                <>
                    <button className="ctrl-btn">
                        <i className="fas fa-eye"></i> {/* Watched Icon */}
                    </button>
                    <button className="ctrl-btn">
                        <i className="fas fa-times"></i> {/* Cross Icon */}
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls;
