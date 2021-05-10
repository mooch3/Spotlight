import React from 'react';
import classes from './Workspace.module.css';
import WorkspaceItem from './WorkspaceItem/WorkspaceItem';
import WorkspaceTitle from './WorkspaceTitle/WorkspaceTitle'

const Workspace = () => (
    <ul className={classes.Workspace}>
        <WorkspaceTitle title={'Workspaces'}/>
        <WorkspaceItem>Lord of the Flies</WorkspaceItem>
        <WorkspaceItem>Pride and Prejudice</WorkspaceItem>
        <WorkspaceItem>Catch 22</WorkspaceItem>
    </ul>
);

export default Workspace;