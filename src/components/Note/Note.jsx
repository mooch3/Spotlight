import classes from './Note.module.css';
import {React} from 'react';


function Note(props){ 

    return (
            <div className={props.selected + " " + classes.Note}>
                <h2 className={props.selected + " noselect"}>{props.user}</h2>
                <hr/>
                <p className={props.selected + " noselect"}>{props.content}</p>
            </div>

    )
}

export default Note;