import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
    },
    header: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20
    }
}));

const FizzBuzz = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
           <h2 className={classes.header}>Fizz Buzz Challenge Completed by Jeff LaPrade</h2>
        </div>
    )
}

export default FizzBuzz;