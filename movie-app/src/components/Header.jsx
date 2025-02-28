import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/">Movie App</Link>
                        </div>

                        <ul className="nav-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/watchlist">To Watch</Link>
                            </li>

                            <li>
                                <Link to="/watched">Watched</Link>
                            </li>

                            <li>
                                <Link to="/add" className='btn'>+ Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header