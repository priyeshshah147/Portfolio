import React from 'react';
import Job from './job';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <ul>
                <Job
                    company="Forio"
                    role="Software Engineer"
                    location="San Francisco, CA"
                    startTime="Feb 2018"
                >
                    <ul>
                        <li>
                            Primarily worked as a Front End Engineer working with React and Redux. I worked on various business and educational simulations hosted on the Forio Epicenter Platform. I worked on over 16 simulations worth over $1M in revenue.
                        </li>
                        <li>
                            Worked on maintaining and updating our internal JavaScript libraries used to connect our front end code to our platform API's.
                        </li>
                        <li>
                            Created a Node.js based Command Line Interface (CLI) that generated our default project boilerplate as well as template components that adhered to company standards. This helped reduce around 16 to 32 dev hours during the initial phases of every project, as well as additional time saved during project development with the component template generator.
                        </li>
                        <li>
                            Helped update general Accessibility Standards for projects and worked heavily in upgrading and maintaining accessible UI's adhering to WCAG 2.1 AA standards.
                        </li>
                    </ul>
                </Job>
                <Job
                    company="Incitement"
                    role="Project Manager"
                    location="Kuala Lumpur, Malaysia"
                    startTime="Oct 2015"
                    endTime="Jan 2017"
                >
                    <ul>
                        <li>
                            Designed and managed the production of over 1000 DIY solar powered lights that were distribured to over 20 electricity deprived remote villages in Malaysia
                        </li>
                        <li>
                            My project helped transition the company from a non-profit to a 7-figure social enterprise in Malaysia.
                        </li>
                        <li>
                            Managed all aspects of the planning and building process, including materials procurement, location scouting, team management, volunteer engagement, event planning, weekly scrums, and more.
                        </li>
                        <li>
                            Hosted 16 volunteer events, managed groups of 60 to 150 volunteers and staff per event.
                        </li>
                    </ul>
                </Job>
            </ul>
        </section>
    )
};

export default Experience;