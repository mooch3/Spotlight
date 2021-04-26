import React from 'react';
import classes from './CreateNote.module.css';
import AddButton from '../Buttons/AddButton/AddButton';
import Aux from '../../Wrappers/Aux/Aux';

function CreateNote(props){


    
    return (
        <div className={classes.CreateNote}>
        <form className={props.selected}>
                {props.expanded && (
                <Aux>
                    <input
                    onChange={props.handleInput}
                    onClick={props.handleExpand}
                    autoComplete="off"
                    name="user"
                    placeholder="Your name..."
                    value={props.user}
                    className={props.selected + " noselect"}
                    />
                    <hr/>
                </Aux>

                )}
                <textarea
                onClick={props.handleExpand}
                onChange={props.handleInput} 
                autoComplete="off"
                name="content"
                placeholder="Add a note..."
                rows={props.expanded ? "6" : "1"} 
                value={props.content}
                className={props.selected + " noselect"}
                />
                <AddButton add={props.add} expanded={props.expanded} />
            </form>


        </div>
    )
}

export default CreateNote;