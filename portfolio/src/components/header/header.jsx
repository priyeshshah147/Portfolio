import React from 'react';
import logo from '../../static/img/logo.png'
import { useToggle } from '../../utils/hooks';
import resume from '../../static/pdf/resume.pdf';

const Header = () => {
    const [expanded, toggleExpanded] = useToggle(false);

    return (
        <>
            <header
                className={expanded ? 'expanded' : ''}
                aria-expanded={expanded}
            >
                <section id="name-wrapper">
                    <img src={logo} aria-hidden="true" alt="" />
                    <h1 className="accessible-text">Harsh Kumar</h1>
                </section>
                <nav>
                    <button
                        className="expand-header-button"
                        role="switch"
                        aria-checked={expanded}
                        onClick={toggleExpanded}
                    >
                        <span className="accessible-text">{expanded ? 'Compress header' : 'Expand Header'}</span>
                        <img src="" alt="" aria-hidden />
                    </button>
                    <ul>
                        <li>
                            <a href="#about" onClick={toggleExpanded} onFocus={toggleExpanded} onBlur={toggleExpanded}>About Me</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={toggleExpanded} onFocus={toggleExpanded} onBlur={toggleExpanded}>Experience</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={toggleExpanded} onFocus={toggleExpanded} onBlur={toggleExpanded}>Projects</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={toggleExpanded} onFocus={toggleExpanded} onBlur={toggleExpanded}>Skills</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleExpanded} onFocus={toggleExpanded} onBlur={toggleExpanded}>Contact Me</a>
                        </li>
                        <li>
                            <a
                                href={resume}
                                download="Harsh_Kumar_Resume"
                                className="btn"
                                onFocus={toggleExpanded} onBlur={toggleExpanded}
                            >
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="menu-overlay" aria-hidden="true" onClick={toggleExpanded}>
            </div>
        </>
    )
}

export default Header;