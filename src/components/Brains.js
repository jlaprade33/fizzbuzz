import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Input, TextField } from '@material-ui/core';

const prompts = {
    notice: '(Default value for submit is 20, default is output for anything not a number or higher than 1200)',
    header: 'Fizz Buzz Challenge Completed by Jeff LaPrade',
    error: '(Input did not meet requirements, resulting output comes from default value: 20)'
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
    error: {
        fontWeight: 300,
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
        width: '70%',
        margin: 'auto',
        color: 'red',
        paddingBottom: 20
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
    },
    report: {
        fontSize: 16,
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
        padding: 0
    }
}));

const FizzBuzz = () => {
    const classes = useStyles();
    const [num, setNum] = useState(20);
    const [show, setShow] = useState(false);
    const [fizzVal, setFizzVal] = useState(null);
    const [error, setError] = useState(false);
    const [reportVals, setReportVals] = useState(null);

    const outputFizz = () => {
        //edge case to check for number inputs
        let fizzer = isNaN(num) || num > 1200 ? 20 : num 
        //output string
        let output = '';
        //step 3 report
        let reportObj = {
            Fizz: 0,
            Buzz: 0,
            FizzBuzz: 0,
            Lucky: 0
        };

        // iterate through num
        for(let i = 1; i <= fizzer; i++){
            if(i.toString().includes('3')){
                output += 'lucky '
                reportObj.Lucky += 1
            }
            else {
                if(i%3 === 0 && i%5 !== 0){
                    output += 'fizz '
                    reportObj.Fizz += 1
                }
                else if(i%5 === 0 && i%3 !== 0){
                    output += 'buzz '
                    reportObj.Buzz += 1
                }
                else if(i%15 === 0){
                    output += 'fizzbuzz '
                    reportObj.FizzBuzz += 1
                }
                else output += i + ' '
            } 
        }

        setReportVals(reportObj)
        setFizzVal(output) 
        setShow(true)
        return fizzer !== num ? setError(true) : setError(false)
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
                error ? <h3 className={classes.error}>{prompts.error}</h3> : null
            }
            {
                fizzVal && show ? (
                    <div>
                         {
                            Object.keys(reportVals).map((item, index) => {
                                return(
                                    <h3 key={index} className={classes.report}>{item + ': ' + reportVals[item]}</h3>
                                )
                            })
                        }
                        <h3 className={classes.fizz}>{fizzVal}</h3>
                    </div>
                    
                ) : null
            }
        </div>
    )
}

export default FizzBuzz;