import React from 'react';
import classes from './WorkspaceTitle.module.css';

const WorkspaceTitle = (props) => (
    <h2 className={classes.WorkspaceTitle}>{props.title}</h2>
)

export default WorkspaceTitle;