import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
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
            {/* Using Divs because in theory the footer will house multiple components */}
            <div className={classes.footer} />
        </div>
    )
}

export default FizzBuzz;