import React from 'react';
import logo from '../../static/img/logo.png'
import { useToggle } from '../../utils/hooks';

const Header = () => {
    const [expanded, toggleExpanded] = useToggle(false);

    return (
        <header
            className={expanded ? 'expanded' : ''}
            aria-expanded={expanded}
        >
            <button
                className="expand-header-button"
                role="switch"
                aria-checked={expanded}
                onClick={toggleExpanded}
            >
                <span className="accessible-text">{expanded ? 'Compress header' : 'Expand Header'}</span>
                <img src="" alt="" aria-hidden/>
            </button>
            <section id="name-wrapper">
                <img src={logo} aria-hidden alt="" />
                <h1>Harsh Kumar</h1>
            </section>
            <nav>
                <ul>
                    <li>

                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;