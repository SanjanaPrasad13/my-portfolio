import React from "react";
import '../components/css/Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
        
    return (
        <div className="navbar">
        <nav>
            <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li> 
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;
