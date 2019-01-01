import React from 'react';
import PropTypes from 'prop-types';
import iconsheet from './iconsheet.svg';
import './icon-element.css';

const IconElement = ({
    icon,
    color='currentColor',
    size=16,
    clickable=false,
    spin=false,
    handleClick=()=>void 0,
}) => {
    const svgClasses = `icon-${size} ${spin ? 'spinning': ''} ${clickable ? 'pointer': ''}`;
    const href = `${iconsheet}#${icon}`
    return (
        <svg
            viewBox="0 0 720 720"
            className={svgClasses}
            fill={color}
            onClick={handleClick}
        >
            <use xlinkHref={href}></use>
        </svg>

    );
}

IconElement.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    clickable: PropTypes.bool,
    spin: PropTypes.bool,
    handleClick: PropTypes.func,
}

export default IconElement;

