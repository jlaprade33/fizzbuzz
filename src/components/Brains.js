import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Input, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%'
    },
    header: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20
    },
    inputContainer: {
        width: 'fit-content',
        margin: 'auto',
        padding: '30px 0',
        display: 'flex'
      },
      button: {
        width: 'fit-content',
        background: '#696969',
        color: 'white',
        height: 20,
        margin: '8px 5px',
        boxShadow: '2px 2px 2px gray',
        borderRadius: 15,
        padding: 10,
        "&:hover":{
            opacity: 0.8
        }
      }
}));

const FizzBuzz = () => {
    const classes = useStyles();
    const [num, setNum] = useState(20);
    const [show, setShow] = useState(false);
    
    const outputFizz = () => {
        console.log(num)
    }

    return(
        <div className={classes.container}>
            <h2 className={classes.header}>Fizz Buzz Challenge Completed by Jeff LaPrade</h2>
            <div className={classes.inputContainer}>
                <TextField 
                    id="outlined-basic" 
                    label="Input a number" 
                    variant="outlined"
                    onChange={event=>setNum(event.target.value)}
                />
                <div className={classes.button} onClick={()=>outputFizz()}>Submit</div>
            </div>
        </div>
    )
}

export default FizzBuzz;