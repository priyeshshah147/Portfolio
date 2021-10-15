import React from 'react';
import resume from '../../static/pdf/resume.pdf';

const Contact = () => {
    return (
        <section id="contact">
            <div className="content">
                <h2>Get in Touch</h2>
                <ul>
                    <li>
                        <a
                            href="http://www.linkedin.com/in/priyesh-shah-bb612688"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/priyeshshah147"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" aria-hidden="true" title="GitHub"></i>
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:priyesh.shah147@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-envelope" aria-hidden="true" title="Email"></i>
                            <span>Email</span>
                        </a>
                    </li>
                </ul>
                <div className="resume-link">
                    <a
                        href={resume}
                        download="Priyesh Shah Resume"
                    >
                        <i className="fas fa-file-alt" aria-hidden="true" title="Resume"></i>
                        <span>Download Resume</span>
                    </a>
                </div>
                <div className="contact-form">
                    Or use the contact form on the bottom right.
                </div>
            </div>
        </section>
    )
}

export default Contact;