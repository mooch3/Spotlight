import React from 'react';
import NoteHeaderInput from './NoteHeaderInput/NoteHeaderInput';
import Aux from '../../Wrappers/Aux/Aux';
import classes from './NoteHeaders.module.css';
import AddButton from '../Buttons/AddButton/AddButton';

function NoteHeaders(props) {
    return (
    <Aux>
        <NoteHeaderInput
        handleExpand={props.handleExpand}
        expanded={props.expanded}
        placeholder="Set a Title..."
        headerType="title"
        handleHeaderInput={props.handleHeaderInput}
        headerInput={props.title}
        />
        {props.expanded ? 
        <div className={classes.NoteHeaders}>
            <NoteHeaderInput
            handleExpand={props.handleExpand}
            expanded={props.expanded}
            placeholder="Optional Subheader..."
            headerType="subheader1"
            handleHeaderInput={props.handleHeaderInput}
            headerInput={props.subheader1}
            />
            <NoteHeaderInput
            handleExpand={props.handleExpand}
            expanded={props.expanded}
            placeholder="Optional Subheader..."
            headerType="subheader2"
            handleHeaderInput={props.handleHeaderInput}
            headerInput={props.subheader2}
            />
            <AddButton add={props.addHeaders} expanded={props.expanded} />
        </div>
        : null
        }
    </Aux>
    );
};

export default NoteHeaders;