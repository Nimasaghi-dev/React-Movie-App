import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/homepage">Movie App</Link>
                        </div>

                        <ul className="nav-links">
                            <li>
                                <Link to="/homepage">Home</Link>
                            </li>

                            <li>
                                <Link to="/">To Watch</Link>
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
