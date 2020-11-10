import React from 'react';
import { makeStyles } from '@material-ui/core';
import Brains from './Brains';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
    },
    bodyContainer: {
        minHeight: 350,
        margin: '10% 0'
    },
    body: {
        width: '60%',
        height: 350,
        margin: 'auto',
        border: '2px solid #696969',
        borderRadius: 15,
        display: 'table'
    },
}));

const FizzBuzz = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.bodyContainer}>
                <div className={classes.body}>
                    <Brains />
                </div>
            </div>
        </div>
    )
}

export default FizzBuzz;