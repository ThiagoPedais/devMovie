import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import "./styles.css";

export default function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <Link to="/"><h1>DevMovie</h1></Link>
                    <a href='https://github.com/ThiagoPedais/devMovie'>
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/ThiagoPedais</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    )
}
