import React from 'react';
import classes from './Color.module.css';

const Color = (props) => {
    // selected, color, click props
    return (
        <div
        onClick={props.click}
        className={props.selected ? classes.ColorDot + " " + classes.Selected + " " + props.color : classes.ColorDot + " " + props.color}
        >
        </div>
    );
};

export default Color;