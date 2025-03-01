import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                                <Link to="/add" className='btn'>
                                    <i className="fas fa-film"></i> Add Movie
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header