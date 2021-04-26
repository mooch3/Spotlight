import classes from './Note.module.css';
import {React} from 'react';
import NoteToolbar from './NoteToolbar/NoteToolbar';


function Note(props){ 

    return (
            <div className={props.selected + " " + classes.Note}>
                <NoteToolbar delete={props.delete} id={props.id} />
                <h2 className={props.selected + " noselect"}>{props.user}</h2>
                <hr/>
                <p className={props.selected + " noselect"}>{props.content}</p>           
            </div>

    )
}

export default Note;