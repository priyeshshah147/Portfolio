import React from 'react';
import Project from './project';
import gitReadyImg from '../../static/img/gitready.png';
import basejumpImg from '../../static/img/basejump.png';

const Projects = () => {
    return (
        <section id="projects">
            <div className="content">
                <h2>Projects</h2>
                <ul>
                    <Project
                        title="GitReady!"
                        className="git"
                        url="https://www.gitready.today/"
                        github="https://github.com/hkumar1993/Git-Ready"
                        img={gitReadyImg}
                    >
                        <p>
                            An online game built to teach users the basics of git using easy to understand concepts and visuals.
                            This game was inspired by games such as <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flebox Froggy</a> and <a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">Grid Garden</a>.
                        </p>
                        <ul className="technologies">
                            <li>HTML/CSS</li>
                            <li>jQuery</li>
                            <li>Flux</li>
                        </ul>
                    </Project>
                    <Project
                        title="BaseJump!"
                        className="base"
                        url="http://www.basejump.tech/"
                        github="https://github.com/hkumar1993/BaseJump"
                        img={basejumpImg}
                        reverse
                    >
                        <p>
                            Basejump is a Full Stack clone of <a href="https://basecamp.com" target="_blank" rel="noopener noreferrer">Basecamp</a>. You can create Teams or Projects, create To-Dos, Message Boards, and Scheduling events for each Team or Project, similar to Basecamp.
                        </p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Redux</li>
                            <li>SCSS</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </Project>
                </ul>
            </div>
        </section>
    )
}

export default Projects;