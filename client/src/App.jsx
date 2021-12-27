import {useState} from 'react'; 
import {Typography, TextField, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 

const App = () => { 
    const [number1, setNumber1] = useState(0); 
    const [number2, setNumber2] = useState(0); 
    let gcd = (a, b) => {  
        if(!b) {
            return a;
        } else {
            return gcd(b, a % b);   
        }
    };
    let lcm = (a, b) => {
        let result = (a * b) / gcd(a, b); 
        return result; 
    }; 
    const calculating = (e) => {
        e.preventDefault(); 
        alert(`GCD of ${number1} and ${number2} is ${gcd(number1, number2)}\nLCM of ${number1} and ${number2} is ${lcm(number1, number2)}`);  
    }
    return (
        <div>
            <Box sx={{textAlign: 'center'}}> 
                <Box>
                    <Typography variant="h3"> 
                        GCD and LCM 
                    </Typography>
                </Box>
                <form>
                    <Box mt={3}> 
                        <TextField sx={{width: 500}} type="number" placeholder="Insert First Number" onChange={event => setNumber1(event.target.value)} /> 
                    </Box>
                    <Box mt={2}> 
                        <TextField sx={{width: 500}} type="number" placeholder="Insert Second Number" onChange={event => setNumber2(event.target.value)} />   
                    </Box>
                    <Box mt={2}> 
                        <Button variant="contained" onClick={calculating}>  
                            Calculate 
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default App; 