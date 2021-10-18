import React, { useEffect, useState } from 'react';
import logo from '../../static/img/logo1.png'
import { useToggle } from '../../utils/hooks';
import resume from '../../static/pdf/Priyesh_Shah_resume.pdf';

const noop = () => {};

const Header = () => {
    const [expanded, toggleExpanded, setExpanded] = useToggle(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const checkWindowWidth = () => window.innerWidth < 1024 ? setMobile(true) : setMobile(false);
        window.addEventListener('resize', checkWindowWidth);
        return () => window.removeEventListener('resize', checkWindowWidth);
    }, []);

    return (
        <>
            <header
                className={expanded ? 'expanded' : ''}
                aria-expanded={expanded}
            >
                <section id="name-wrapper" class="logo-header" >
                    <img src={logo} aria-hidden="true" alt="" />
                    <h1 className="accessible-text">Priyesh Shah</h1>
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
                            <a
                                href="#about"
                                onClick={isMobile ? toggleExpanded : noop}
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
                            >
                                About
                                Me</a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                onClick={isMobile ? toggleExpanded : noop}
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={isMobile ? toggleExpanded : noop}
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={isMobile ? toggleExpanded : noop}
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={isMobile ? toggleExpanded : noop}
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
                            >
                                Contact
                                Me</a>
                        </li>
                        <li>
                            <a
                                href={resume}
                                download="Priyesh_Shah_resume"
                                className="btn"
                                onFocus={isMobile ? toggleExpanded : noop}
                                onBlur={isMobile ? toggleExpanded : noop}
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