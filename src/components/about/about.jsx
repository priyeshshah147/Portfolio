import React from 'react';
import logo from '../../static/img/logo2.png';

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
                        I am passionate about coding, and enjoy building projects that live both on the web as well as the physical world. I love to create things that can have a tangible impact on people that use them.
                    </p>
                    {/* <p>
                        I graduated with a degree in Mechatronic Engineer, and was the Project Manager for Liter of Light Malaysia, one of Malaysia's largest volunteer powered social projects in 2016.
                        Shortly after returning to the US in 2017, I went back to my coding roots, joining Forio shortly after graduating from App Academy, an intensive coding bootcamp in San Francisco focussing in Full Stack Web Development.
                    </p> */}
                    <p>
                        Over the past 3 years, I have primarily been a Front End Engineer at Forio, with an increasing specialization and focus on Web Accessibility. I also have been working on updating and maintaining internal JavaScript libraries.
                    </p>

                </div>
                <div className="img-container">
                    <img src={logo} alt="" aria-hidden="true"/>
                </div>
            </div>
        </section>
    );
}

export default About;