import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
    },
    header: {
        background: '#132533',
        height: 64,
        opacity: 0.9
    },
}));

const FizzBuzz = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            {/* Using Divs because in theory the header will house multiple components */}
            <div className={classes.header} />
        </div>
    )
}

export default FizzBuzz;