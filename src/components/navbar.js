import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar_box">
            <nav className="navbar">
                <div>
                    <img src='../styles/SURREAL ESTATE.jpg' alt="logo_image"></img>
                    <ul className="navbar-links-item">
                        <li><Link className="item" to="/">View Properties</Link></li>
                        <li><Link className="item" to="/add-property">Add a property</Link></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
};

export default NavBar;