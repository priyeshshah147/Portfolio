import React from 'react';
import Skill from './skill';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <Skill
                    fa="fab fa-html5"
                    title="HTML"
                />
                <Skill
                    fa="fab fa-css3-alt"
                    title="CSS3"
                />
                <Skill
                    fa="fab fa-js-square"
                    title="JavaScript"
                />
                <Skill
                    fa="fas fa-universal-access"
                    title="Accessibility"
                />
                <Skill
                    fa="fab fa-git-alt"
                    title="Git"
                />
                <Skill
                    fa="fab fa-react"
                    title="React"
                />
                <Skill
                    fa="fab fa-sass"
                    title="SASS/SCSS"
                />
                <Skill
                    fa="fab fa-node"
                    title="Node.js"
                />
                <Skill
                    fa="fab fa-python"
                    title="Python"
                />
                <Skill
                    fa="fas fa-gem"
                    title="Ruby"
                />
            </ul>
        </section>
    );
}

export default Skills;