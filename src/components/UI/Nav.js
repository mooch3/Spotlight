import React from 'react';
import classes from './Nav.module.css';

function Nav() {
    return (
            <ul className={classes.Nav}>
                <li>Notes</li>
                <li>Classroom</li>
                <li>Annotations</li>
            </ul>
    )
}

export default Nav;