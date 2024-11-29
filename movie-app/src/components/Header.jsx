import React from 'react';
import { Link } from 'react-router-dom'; // helps to move between pages

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
                                <Link to="/">Watch List</Link>
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
