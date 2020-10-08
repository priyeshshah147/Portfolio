import React from 'react';

const Job = ({
    company,
    role,
    location,
    startTime,
    endTime = 'Present',
    children,
}) => {
    return (
        <li className="job">
            <div className="job-details">
                <div className="job-header">
                    <h3>{company}</h3>
                    <span>{role}</span>
                </div>
                <span>{location}</span>
                <span>{startTime} - {endTime}</span>
            </div>
            <div className="job-description">
                {children}
            </div>
        </li>
    )
};

export default Job;