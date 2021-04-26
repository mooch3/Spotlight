import React from 'react';
import classes from './SideDrawer.module.css';
import Nav from '../Nav/Nav';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Closed]

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.closeMenu}>
            <h1>Workspaces</h1>
            <nav>
                <Nav />
            </nav>
        </div>
    )
}

export default SideDrawer;