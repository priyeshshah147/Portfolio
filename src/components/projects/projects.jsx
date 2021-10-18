import React from 'react';
import Project from './project';
import getseyImg from '../../static/img/getsey_site.JPG';
import someShareImg from '../../static/img/somashare_site.JPG';
import archeryImg from '../../static/img/archery_site.JPG'

const Projects = () => {
    return (
        <section id="projects">
            <div className="content">
                <h2>Projects</h2>
                <ul>
                    <Project
                        title="Getsey"
                        className="getsey"
                        url="https://getsey.herokuapp.com/#/"
                        github="https://github.com/priyeshshah147/Getsey"
                        img={getseyImg}
                        reverse
                    >
                        <p>
                            Getsey is a Full Stack clone of <a href="https://www.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy</a>. which allows users see the trending products, search for any product name, add to cart and/or purchase it and add reviews.
                        </p>
                        <ul className="technologies">
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                            <li>Ruby</li>
                            <li>Rails</li>
                        </ul>
                    </Project>
                    <Project
                        title="SomaShare"
                        className="soma"
                        url="https://somashare.herokuapp.com/#/"
                        github="https://github.com/SymmetricInDesign/SomaShare"
                        img={someShareImg}
                        reverse
                    >
                        <p>
                            SomaShare is a web application which allows users to post educational resources for the purposes of self-improvement or home schooling. Posts are displayed based on high ratings. 
                        </p>
                        <ul className="technologies">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </Project>
                    <Project
                        title="Archery 2.0"
                        className="archery"
                        url="https://priyeshshah147.github.io/Archery-2.0/"
                        github="https://github.com/priyeshshah147/Archery-2.0"
                        img={archeryImg}
                    >
                        <p>
                            An original JavaScript game in which player shoots the archery board to obtain based on accuracy of their aim. The higher the score the harder the game becomes.
                        </p>
                        <ul className="technologies">
                            {/* <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>Canvas</li> */}
                        </ul>
                    </Project>
                    
                </ul>
            </div>
        </section>
    )
}

export default Projects;
