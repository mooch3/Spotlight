import {React, useState} from 'react';
import classes from './CreateNote.module.css';

function CreateNote(props){

    
    const [expanded, setExpanded] = useState(false);
    
    function handleClick(){
        setExpanded(true)
    }


    
    return (
        <div className={classes.CreateNote}>
            <form className={props.selected}>
                <input 
                onChange={props.handleInput}
                onClick={handleClick}
                autoComplete="off"
                name="user"
                placeholder="Your name..."
                value={props.user}
                className={props.selected + " noselect"}
                />
                <textarea
                onClick={handleClick}
                onChange={props.handleInput} 
                autoComplete="off"
                name="content"
                placeholder="Add a note..."
                rows={expanded ? "6" : "1"} 
                value={props.content}
                className={props.selected + " noselect"}
                />
                <button type="button" onClick={props.addNote} className="noselect">
                    Publish Note
                </button>
            </form>
        </div>
    )
}

export default CreateNote;