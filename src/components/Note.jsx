import React from 'react';

function Note(props){


    return (
        <div className={props.selected}>
            <h2 className={props.selected}>{props.user}</h2>
            <p className={props.selected}>{props.content}</p>
        </div>
    )
}

export default Note;