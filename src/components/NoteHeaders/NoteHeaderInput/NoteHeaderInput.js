import React from 'react';
import classes from './NoteHeaderInput.module.css';

const NoteHeaderInput = (props) => (
    <div className={classes.NoteHeaderInput}>
        <form>
            <input
            onClick={props.handleExpand}
            onChange={props.handleHeaderInput}
            autoComplete="off"
            placeholder={props.placeholder}
            value={props.headerInput}
            name={props.headerType}
            />
        </form>      
    </div>


)

export default NoteHeaderInput;