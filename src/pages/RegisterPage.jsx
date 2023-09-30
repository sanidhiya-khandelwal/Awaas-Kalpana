import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import alert from '../utility/alert';

const RegisterPage = () => {
    let name = React.useRef();
    let phone = React.useRef();
    let email = React.useRef();
    let username = React.useRef();
    let password = React.useRef();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const nameVal = name.current.value;
        const phoneVal = phone.current.value;
        const emailVal = email.current.value;
        const usernameVal = username.current.value;
        const passwordVal = password.current.value;


        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (nameVal.length < 2 || nameVal.length > 50) {
            alert('Name should be greater than 1 and less than equal to 50 characters', 'error')
            return
        }
        if (phoneVal < 1000000000) {
            alert('invalid phone number', 'error')
            return
        }
        if (!mailformat.test(emailVal)) {
            alert('invalid email', 'error')
            return
        }
        if (usernameVal.length < 3 || usernameVal.length > 30) {
            alert('Username should be greater than 2 and less than equals 30 characters', 'error')
            return
        }
        if (!usernameFormat.test(usernameVal)) {
            alert('Invalid username! first character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].', 'error')
            return;
        }
        if (!passwordFormat.test(passwordVal)) {
            alert('password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:', 'error')
            return
        }

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameVal,
                phone: phoneVal,
                email: emailVal,
                username: usernameVal,
                password: passwordVal
            })
        })

        if (response.ok) {
            const data = await response.json()
            name.current.value = "";
            phone.current.value = ""
            email.current.value = ""
            username.current.value = ""
            password.current.value = ""
            alert('User Registered', 'success')
        }
        else {
            const data = await response.json()
            alert(data, 'error')
        }

    }
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Register Now</h1>
                    <form onSubmit={handleSubmit} fullWidth>
                        <TextField id="outlined-basic"
                            label="Enter your name"
                            variant="outlined"
                            style={{
                                marginBottom: '10px',
                                width: '90%'
                            }}
                            inputRef={name}
                            required
                            autoComplete='true'
                        />
                        <TextField id="outlined-basic"
                            label="Enter your phone number"
                            variant="outlined"
                            type='number'
                            style={{
                                marginBottom: '10px',
                                width: '90%'
                            }}
                            inputRef={phone}
                            required
                            autoComplete='true'
                        />
                        <TextField id="outlined-basic"
                            label="Enter your email"
                            variant="outlined"
                            type='email'
                            style={{
                                marginBottom: '10px',
                                width: '90%'
                            }}
                            inputRef={email}
                            required
                            autoComplete='true'
                        />
                        <TextField id="outlined-basic"
                            label="Enter your username"
                            variant="outlined"
                            type='text'
                            style={{
                                marginBottom: '10px',
                                width: '90%'
                            }}
                            inputRef={username}
                            required
                            autoComplete='true'
                        />
                        <TextField id="outlined-basic"
                            label="Enter your password"
                            variant="outlined"
                            type='password'
                            style={{
                                marginBottom: '10px',
                                width: '90%'
                            }}
                            inputRef={password}
                            required
                            autoComplete='true'
                        />
                        <Button
                            type='submit'
                            color="secondary"
                            style={{
                                width: '90%',
                                backgroundColor: '#800080',
                                color: 'white',
                                marginBottom: '5px',
                                fontWeight: 900,
                                fontFamily: 'cursive',
                                fontSize: '18px'
                            }}
                        >Register</Button>
                        <h4>Already have an account <button className='customizedButton'>Login</button></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage