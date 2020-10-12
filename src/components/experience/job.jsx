import React, { useRef } from 'react';
import { useToggle } from '../../utils/hooks'

const Job = ({
    company,
    role,
    location,
    startTime,
    defaultOpen,
    children,
    endTime = 'Present',
}) => {
    const [expanded, toggleExpanded] = useToggle(defaultOpen);
    const accordion = useRef(null);

    // const toggle = () => {
    //     if (!expandedOnce) {
    //         setToggled(true);
    //     }
    // }

    return (
        <li className="job">
            <button onClick={toggleExpanded} className={expanded ? 'btn-expanded' : ''}>
                <h3>{company} - <span>{role}</span></h3>
                <div>
                    <span>{startTime} - {endTime}&nbsp;</span>
                    <span>{location}&nbsp;</span>
                </div>
            </button>
            <div
                className={`job-container ${expanded ? 'expanded' : ''}`}
                style={expanded ? { maxHeight: `${accordion?.current?.scrollHeight}px` } : { maxHeight: '0px' }}
                ref={accordion}
            >
                {/* <div className="job-details">
                    <span>{startTime} - {endTime}</span>
                    <span>{location}</span>
                </div> */}
                <div className="job-description">
                    {children}
                </div>
            </div>
        </li>
    )
};

export default Job;