import {React, useState} from 'react';

function CreateNote(props){

    
    const [expanded, setExpanded] = useState(false);
    
    function handleClick(){
        setExpanded(true)
    }


    
    return (
        <div>
            <form className={props.selected}>
                <input 
                onChange={props.handleInput}
                onClick={handleClick}
                autoComplete="off"
                name="user"
                placeholder="Your name..."
                value={props.user}
                className={props.selected}
                />
                <textarea
                onClick={handleClick}
                onChange={props.handleInput} 
                autoComplete="off"
                name="content"
                placeholder="Add a note..."
                rows={expanded ? "6" : "1"} 
                value={props.content}
                className={props.selected}
                />
                <button type="button" onClick={props.addNote}>
                    Create Note
                </button>
            </form>
        </div>
    )
}

export default CreateNote;