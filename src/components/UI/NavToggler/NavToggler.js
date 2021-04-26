import React from 'react';
import classes from './NavToggler.module.css';

const navToggler = (props) => (
    <div className={classes.NavToggler} onClick={props.showMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default navToggler;