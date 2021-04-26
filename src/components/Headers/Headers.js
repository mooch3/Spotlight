import React from 'react';
import Header from './Header/Header';
import classes from './Headers.module.css';

const Headers = (props) => {

    return (
        <div className={classes.Headers}>
            <div className={classes.Title}>
                <Header
                header={props.title}
                />
            </div>
            <div className={classes.SubHeaders}>
                <Header
                header={props.subheader1}
                />
                <Header
                header={props.subheader2}
                />
            </div>
        </div>
    )
}

export default Headers;