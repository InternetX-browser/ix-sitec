import React from 'react';
import './styles/Tooltip.css';

const Tooltip = ({ text, children, style}) => {
    return (
    <div style={style} className="tooltip">
    <span className="tooltip-text">{text}</span>
    {children}
    </div>
    )
}

export default Tooltip;