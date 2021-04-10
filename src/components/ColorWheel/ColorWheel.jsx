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
            
            

        {/* notes need to be rendered in main workspace div */}
         {/* {notes.map((note, index) => (
             <Draggable key={index}>
             <Note 
                key={index}
                id={index}
                user={note.user}
                content={note.content}
                selected={note.color + " note"}
                />
             </Draggable>
                
            ))} */}
        </div>
    )
}

export default ColorWheel;