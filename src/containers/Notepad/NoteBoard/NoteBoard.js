import React from 'react';
import classes from './NoteBoard.module.css';

const NoteBoard = (props) => (
    <div className={classes.NoteBoard}>
        {props.children}
    </div>
);

export default NoteBoard;