import React from 'react';
import classes from './WorkspaceItem.module.css';

const WorkspaceItem = (props) => (
    <li className={classes.WorkspaceItem}>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default WorkspaceItem;