import './App.css';
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Divider, 
    FormControl, FormControlLabel, 
    RadioGroup, Radio}  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    modifier_table: {
        borderCollapse: "collapse",
        borderStyle: "hidden",
        '& tr' : {
            '& td': {
                borderWidth: 1,
                borderStyle: "solid",
                padding: 10,
                borderColor: "light grey"
            }
        }
    }
}));


function Keyboard() {
    let keys = require("./keys.json");
    const [selected, setSelected] = useState("*");
    const [display, setDisplay] = useState({name: "", id: "", description: "", modifiers: [], category: []})
    let num_cols = keys.reduce((acc,x) => lcm(x.length, acc), 1)
    console.log(num_cols)
    return (<div align = "center">
        <Controls selected={selected} setSelected={setSelected}/>
        <table>
            {
                keys.map((row) => {
                    const span = num_cols/row.length;
                    return (<tr> 
                        {
                            row.map((x, i) => { 
                                let align = "center";
                                if(i === 0) {
                                    align = "right"
                                } else if (i === row.length - 1) {
                                    align = "left"
                                }
                                return Key({align: align, span: span, current_category: selected, setDisplay: setDisplay, info: x}) })
                        } 
                    </tr>)
                })
            }
        </table>
        {Info(display)}
    </div>
    );
}

function Controls({selected, setSelected}) {

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (<FormControl component="fieldset">
        <RadioGroup row value={selected} onChange={handleChange}>
            <FormControlLabel value="*" control={<Radio />} label="All" />
            <FormControlLabel value="Movement" control={<Radio />} label="Movement" />
            <FormControlLabel value="Editing" control={<Radio />} label="Editing" />
            <FormControlLabel value="Misc" control={<Radio />} label="Misc" />
        </RadioGroup>
    </FormControl>)
}

function Key({info, span, align, current_category, setDisplay}) {
    const handleClick = (event) => {
        setDisplay(info)
    };

    const disabled = current_category !== "*" && !info.category.includes(current_category)
    return (
        <td colspan={span} align={align}>
            <Button aria-describedby={info.id} variant="contained" color="primary" onClick={handleClick} disabled={disabled}>
                {info.id}
            </Button>
        </td>
    );
}

function Info({id, name, description, modifiers, category}) {
    const classes = useStyles();
    return(<div>
        <Typography className={classes.typography} variant="h5">{name} ({id})</Typography>
        <Divider light />
        <Typography className={classes.typography}>{description}</Typography>
        <table className={classes.modifier_table}>
            {
                Object.entries(modifiers).map(([nm, desc]) => (<tr> <td>{nm}</td> <td>{desc}</td> </tr>))
            }
        </table>

    </div>)
}

// Pulled from the web
//
function lcm(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

export default Keyboard;
