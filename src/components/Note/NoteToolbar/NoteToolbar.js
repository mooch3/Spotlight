import React from 'react';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import classes from './NoteToolbar.module.css';

const NoteToolbar = (props) => (
    <div className={classes.NoteToolbar}>
        <DeleteButton delete={props.delete} id={props.id} />
    </div>
)

export default NoteToolbar;