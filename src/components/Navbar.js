import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const handleScroll = (id, offset = 80) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul>
                <li><a onClick={() => handleScroll('hero')}>Home</a></li>
                <li><a onClick={() => handleScroll('users', 120)}>Users</a></li> 
                <li><a onClick={() => handleScroll('services')}>Services</a></li>
                <li><a onClick={() => handleScroll('pricing')}>Pricing</a></li>
                <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
                {/* Offset increased to make search bar fully visible */}
            </ul>
        </nav>
    );
};

export default Navbar;
