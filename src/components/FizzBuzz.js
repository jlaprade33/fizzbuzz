import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Brains from './Brains';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
    },
    header: {
        background: '#132533',
        height: 64,
        opacity: 0.9
    },
    bodyContainer: {
        height: 350,
        margin: '10% 0'
    },
    body: {
        width: '60%',
        height: 350,
        margin: 'auto',
        border: '2px solid #696969',
        borderRadius: 15
    },
    footer: {
        background: '#132533',
        height: 164,
        opacity: 0.2
    }
}));

const FizzBuzz = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.header} />
            <div className={classes.bodyContainer}>
                <div className={classes.body}>
                    <Brains />
                </div>
            </div>
            <div className={classes.footer} />
        </div>
    )
}

export default FizzBuzz;