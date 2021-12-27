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
            <Box sx={{textAlign: 'center'}} mt={30}>  
                <Box>
                    <Typography variant="h1">  
                        GCD and LCM Calculator  
                    </Typography>
                </Box>
                <form onSubmit={calculating}> 
                    <Box mt={3}> 
                        <TextField sx={{width: 500}} type="number" placeholder="Insert First Number" onChange={event => setNumber1(event.target.value)} required/> 
                    </Box>
                    <Box mt={2}> 
                        <TextField sx={{width: 500}} type="number" placeholder="Insert Second Number" onChange={event => setNumber2(event.target.value)} required/>    
                    </Box>
                    <Box mt={2}> 
                        <Button variant="contained" type="submit">  
                            Calculate 
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default App; 