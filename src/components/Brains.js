import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Input, TextField } from '@material-ui/core';

const prompts = {
    notice: '(Default value for submit is 20, default is output for anything not a number or higher than 1200)',
    header: 'Fizz Buzz Challenge Completed by Jeff LaPrade'
}
const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    header: {
        fontWeight: 600,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20
    },
    notice: {
        fontWeight: 300,
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
        width: '70%',
        margin: 'auto'
    },
    inputContainer: {
        width: 'fit-content',
        margin: 'auto',
        padding: '30px 0',
        display: 'flex',
        overFlow: 'scroll'
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
    },
    fizz: {
        fontSize: 16,
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
        padding: 20
    }
}));

const FizzBuzz = () => {
    const classes = useStyles();
    const [num, setNum] = useState(20);
    const [show, setShow] = useState(false);
    const [fizzVal, setFizzVal] = useState(null)
 
    let fizzer = isNaN(num) || num > 1200 ? 20 : num

    const outputFizz = () => {
        let output = '';
        for(let i = 1; i <= fizzer; i++){
            if(i.toString().includes('3')) output += 'lucky '
            else {
                if(i%3 === 0 && i%5 !== 0){
                    output += 'fizz '
                }
                else if(i%5 === 0 && i%3 !== 0){
                    output += 'buzz '
                }
                else if(i%15 === 0){
                    output += 'fizzbuzz '
                }
                else output += i + ' '
            } 
        }

        setFizzVal(output) 
        setShow(true)
    }

    return(
        <div className={classes.container}>
            <h2 className={classes.header}>{prompts.header}</h2>
            <h4 className={classes.notice}>{prompts.notice}</h4>
            <div className={classes.inputContainer}>
                <TextField 
                    id="outlined-basic" 
                    label="Input a number" 
                    variant="outlined"
                    onChange={event=>setNum(event.target.value)}
                />
                <div className={classes.button} onClick={()=>outputFizz()}>Submit</div>
            </div>
            {
                fizzVal && show ? <h3 className={classes.fizz}>{fizzVal}</h3> : null
            }
        </div>
    )
}

export default FizzBuzz;