import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import image from '../styles/SURREAL ESTATE.jpg'

const NavBar = (onLogin, onLogout) => {
    return (
        <div className="navbar_box">
            <FacebookLogin
                autoLoad={true}
                callback={onLogin}
                appId="1655007468321612"
                onLogout
                
            />
            <nav className="navbar">
               
                    <img src={image} alt="logo_image"></img>
                    <ul className="navbar-links-item">
                        <li><Link className="item" to="/">View Properties</Link></li>
                        <li><Link className="item" to="/add-property">Add a property</Link></li>
                    </ul>
                    
              
            </nav>
        </div>
    )
};

export default NavBar;