import React from 'react';

const Skill = ({
    fa,
    title,
}) => {
    return (
        <li className="skill">
            <i className={fa} aria-hidden="true" title={title}></i>
            <span>{title}</span>
        </li>
    )
}

export default Skill;