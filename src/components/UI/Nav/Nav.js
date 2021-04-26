import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

function Nav() {
    return (
            <ul className={classes.Nav}>
                <NavItem>Classroom</NavItem>
                <NavItem>Notes</NavItem>
                <NavItem>Annotations</NavItem>
            </ul>
    )
}

export default Nav;