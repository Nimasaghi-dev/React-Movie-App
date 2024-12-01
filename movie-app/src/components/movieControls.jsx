

export const MovieControls = ({ movie , type}) => {
    return (
        <div className="inner-card-controls">
            {type === "watchList" && (
                <>
                    <button className="ctrl-btn">
                        {/* <i className="fa-fw far fa-eye"></i> - font */}
                    </button>
                    <button className="ctrl-btn">
                        {/* <i className="fa-fw far fa-eye"></i> - font */}
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls;
