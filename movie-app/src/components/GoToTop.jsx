import { useState, useEffect } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`go-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Go to top"
            title="Go to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default GoToTop; 