import React from 'react';
import classes from './Header.module.css';
import Nav from '../../components/UI/Nav'
import Logo from '../../components/Logo/Logo'

const Header = () => (
    <div className={classes.Header}>
        <Logo />
        <Nav />
    </div>
)

export default Header;