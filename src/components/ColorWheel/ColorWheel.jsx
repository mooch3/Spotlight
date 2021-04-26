import React from 'react';
import Color from './Colors/Color';
import classes from './ColorWheel.module.css';

function ColorWheel(props) {
 
    function handleSelect(color){
        props.click(color)
    }


    return (
        <div className={classes.ColorWheel}>
        {props.colors.map(color => 
            <Color 
            key={color}
            color={color}
            selected={color === props.selected}
            click={() => handleSelect(color)}
            />
        )}
        </div>
    )
}

export default ColorWheel;