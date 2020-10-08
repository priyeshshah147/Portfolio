import React from 'react';
import Project from './project';
import gitReadyImg from '../../static/img/gitready.png';
import basejumpImg from '../../static/img/basejump.png';

const Projects = () => {
    return (
        <section id="projects">
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
                        GitReady! is an online game built to teach users the basics of git using easy to understand concepts and visuals.
                        This game was inspired by games such as <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flebox Froggy</a> and <a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">Grid Garden</a> that also teach basic coding concepts in a similar fashion.
                    </p>
                    <p>
                        This game was built using jQuery, however it was written in a way to understand unideirectional data flow and a common shared state, similar to concepts of Flux / Redux.
                    </p>
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
                        Basejump is a Full Stack clone of <a href="https://basecamp.com" target="_blank" rel="noopener noreferrer">Basecamp</a>. This clone comes with various features included in Basecamp, including creating Teams or Projects, and creating To-Dos, Message Boards, and Scheduling events for each Team or Project. I pride myself for making what I believe at the time was an almost pixel-to-pixel replica of Basecamp.
                    </p>
                    <p>
                        This project was built using React and Redux on the Front End, with Ruby on Rails on the backend, using a SQL based database, and hosted on Heroku.
                    </p>
                </Project>
            </ul>
        </section>
    )
}

export default Projects;