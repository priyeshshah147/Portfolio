import React from 'react';
import logo from '../../static/img/work14.png';

const About = () => {
    return (
        <section id="about">
            <div className="content">
                <h2>
                    About Me
                </h2>
                <div>
                    <p>
                        Hello! My name is Priyesh, and I am a software engineer based in the Michigan.
                    </p>
                    <p>
                        I am passionate about coding, and enjoy building projects that help create solutions for people through the use of technology.
                    </p>

                    <p>
                        I have recently graduated from App Academy, an intensive 1000hr coding bootcamp where I learnt a greate amount of technologies that enhanced my software engineering skills. 
                    </p>

                    <p>Prior to App Academy I graduated with a degree in Mechatronic Engineer, there after I worked as Technical Sales Manager for a machinery retail outlet and I also became a Project Lead for Liter of Light(a NGO that helps provide solar lights in poor areas.</p>


                </div>
                <div className="img-container">
                    <img src={logo} alt="" aria-hidden="true"/>
                </div>
            </div> 
        </section>
    );
}

export default About;