import React from 'react'
import { Button, FormControl, TextField } from '@mui/material'
import alert from '../utility/alert';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
    const [redirect, setRedirect] = React.useState(false)
    const { setUserInfo } = React.useContext(UserContext)

    const username = React.useRef();
    const password = React.useRef();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const usernameVal = username.current.value;
        const passwordVal = password.current.value;

        const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if (usernameVal.length < 3 || usernameVal.length > 30) {
            alert('Username should be greater than 2 and less than equals 30 characters', 'error')
            return
        }
        if (!usernameFormat.test(usernameVal)) {
            alert('Invalid username! first character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].', 'error')
            return;
        }
        if (!passwordFormat.test(passwordVal)) {
            alert('Password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:', 'error')
            return
        }

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameVal,
                password: passwordVal
            }),
            credentials: 'include'
        })
        const data = await response.json();
        if (response.ok) {
            alert(data.success, 'success')
            setUserInfo(data.data)
            setRedirect(true)
        }
        else {
            alert(data, 'error')
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} fullWidth>
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
                        >Login</Button>
                        <h4>Already have an account <button className='customizedButton'>Register</button></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage