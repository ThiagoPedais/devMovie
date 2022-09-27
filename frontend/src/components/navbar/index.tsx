import React from 'react';
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import "./styles.css";

export default function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DevMovie</h1>
                    <a href='https://github.com/devsuperior'>
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    )
}
