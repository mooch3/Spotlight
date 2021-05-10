import React from 'react';
import Nav from '../Nav/Nav';
import Logo from '../../Logo/Logo';
import classes from '../Toolbar/Toolbar.module.css';

function Toolbar() {
    return (
    <header className={classes.Toolbar}>
        <Logo />
        <div className={classes.DesktopOnly}>
            <nav>
                <Nav />
            </nav>

        </div>    
    </header>
    )
}

export default Toolbar;