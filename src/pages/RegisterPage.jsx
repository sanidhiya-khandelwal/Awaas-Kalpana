import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Register Now</h1>
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" label="Enter your name*" variant="outlined" style={{ marginBottom: '10px' }} />
                        <TextField id="outlined-basic" label="Enter your phone number*" variant="outlined" type='number' style={{ marginBottom: '10px' }} />
                        <TextField id="outlined-basic" label="Enter your email*" variant="outlined" type='email' style={{ marginBottom: '10px' }} />
                        <TextField id="outlined-basic" label="Enter your username*" variant="outlined" type='text' style={{ marginBottom: '10px' }} />
                        <TextField id="outlined-basic" label="Enter your password*" variant="outlined" type='password' style={{ marginBottom: '10px' }} />
                        <Button color="secondary" style={{ backgroundColor: '#800080', color: 'white', marginBottom: '5px', fontWeight: 900, fontFamily: 'cursive', fontSize: '18px' }}>Register</Button>
                        <h4>Already have an account <button className='customizedButton'>Login</button></h4>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage