import React from 'react';
import Skill from './skill';
import { Icon } from '@iconify/react';


const Skills = () => {
    return (
        <section id="skills">
            <div className="content">
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
                        fa="fab fa-react"
                        title="React"
                    />

                    <Skill
                        fa="fas fa-gem"
                        title="Ruby"
                    />
                    
                    
                    
                        {/* <Icon className="fab fa-react" icon="akar-icons:redux-fill" 
                            
                        /> */}
                    
                    <Skill
                        fa="fab fa-aws"
                        title="Amazon Web Service"
                    />
                    <Skill
                        fa="fab fa-git-alt"
                        title="Git"
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
                        fa="fab fa-java" 
                        title="Java"
                    />

                    {/* <Skill
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
                    /> */}
                </ul>
            </div>
        </section>
    );
}

export default Skills;