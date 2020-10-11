import React from 'react';

const Project = ({
    title,
    url,
    github,
    img,
    gif,
    children,
    className = '',
    reverse = false,
}) => {
    return (
        <li className={`project ${reverse ? 'reverse' : ''} ${className}`}>
            <div className="project-img">
                <img src={img} alt={`Screenshot of ${title}`} />
            </div>
            <div className="content-container">
                <h3>{title}</h3>
                <div className="terminal-content">
                    <div className="project-content">
                        {children}
                    </div>
                    <div className="project-links">
                        <a href={github} rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github" title="GitHub" aria-hidden="true"></i>
                            <span className="accessible-text">GitHub</span>
                        </a>
                        <a href={url} rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-external-link-alt" title="Live Site" aria-hidden="true"></i>
                            <span className="accessible-text">Live Site</span>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Project;