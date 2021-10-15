import React from 'react';
import Job from './job';

const Experience = () => {
    return (
        <section id="experience">
            <div className="content">
                <h2>Experience</h2>
                <ul className="experiences-list">
                    <Job
                        company="Krish Tradind C."
                        role="Sales Manager"
                        location="Nairobi, Kenya"
                        startTime="August 2016"
                        endTime="Jan 2020"
                        defaultOpen
                    >
                        <ul>
                            <li>
                                Analyzed and recommended agricultural equipment to prospective buyers by understanding customers’ farming capacity and needs
                            </li>
                            <li>
                                Ensured import of durable and efficient equipment by comparing  samples from different suppliers/manufacturers and checking supplies every quarter
                            </li>
                            <li>
                                Strategized increase of sales by 50% using the help digital marketing, and  planning and training sales representatives better understand agriculture machines
                            </li>
                        </ul>
                    </Job>
                    <Job
                        company="Liter of Light Kenya"
                        role="Project Lead"
                        location="Nairobi, Kenya"
                        startTime="Jan 2017"
                        endTime="Feb 2019"
                    >
                        <ul>
                            <li>
                                Established Liter of Light Kenya team with 5 members and scout rural areas in need of electricity
                            </li>
                            <li>
                                Generated videos upon scouting various rural areas in Kenya and created proposals to obtain funding
                            </li>
                            <li>
                                Executed  2 successful projects, by planning, training and developing more than 500 solar lights for more than 300 homes 
                            </li>
                        </ul>
                    </Job>
                </ul>
            </div>
        </section>
    )
};

export default Experience;