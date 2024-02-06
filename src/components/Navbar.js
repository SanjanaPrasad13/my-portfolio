import React from "react";
import { Link } from 'react-router-dom';
import '../components/css/Navbar.css'

function Navbar() {
        
    return (
        <div className="navbar">
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li> 
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;
