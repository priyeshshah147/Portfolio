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
            <div className="img-container" style={{ backgroundImage: `url(${img})`}}>
                {/* <img src={img} alt={`Screenshot of ${title}`} /> */}
            </div>
            <div className="content-container">
                <h3>{title}</h3>
                {children}
                <div className="project-links">
                    <a href={url} rel="noopener noreferrer" target="_blank">
                        <i className="fas fa-desktop" title="Live Site" aria-hidden="true"></i>
                        Live Site
                    </a>
                    <a href={github} rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" title="GitHub" aria-hidden="true"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </li>
    )
}

export default Project;