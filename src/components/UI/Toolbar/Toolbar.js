import React from 'react';
import Nav from '../Nav/Nav';
import NavToggler from '../NavToggler/NavToggler';
import Logo from '../../Logo/Logo';
import classes from '../Toolbar/Toolbar.module.css';

function Toolbar(props) {
    return (
    <header className={classes.Toolbar}>
        <NavToggler showMenu={props.showMenu} />
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