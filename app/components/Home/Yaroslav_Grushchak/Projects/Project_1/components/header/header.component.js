import React from 'react';
// import './header.component.css';
import './header.component.styl';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => (
    <header className="container-fluid">
        <div className="container-fluid top_nav">
            <div className="container">
                <a href="#" className="logo">
                    <img src={require("../../images/logo.png")} alt="Blueasy"/>
                </a>

                <span className="main-nav-trigger trigger-nav glyphicon glyphicon-menu-hamburger"></span>
                <nav className="trigger-victim">
                    <li><a>Home</a></li>
                    <li><Link to="#services">Services</Link></li>
                    <li><a>Features</a></li>
                    <li><Link to="#portfolio">Portfolio</Link></li>
                    <li><a>Contact</a></li>
                </nav>
            </div>
        </div>

        <div className="hero container">
            <h1>
                <span>&#8243;I&#8242;m looking for the unexpected.</span><br/>
                <span>I&#8242;m looking for things I&#8242;ve never seen before.&#8243;</span>
            </h1>
        </div>
    </header>  
);

export default Header;