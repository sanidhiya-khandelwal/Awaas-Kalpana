import React, { useEffect } from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../context/UserContext';
const Header = () => {
    const { userInfo, setUserInfo } = React.useContext(UserContext)
    const logoutUser = () => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null)
    }
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/profile`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setUserInfo(data.data))
    }, [])
    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <Link to='/' className="header-left-brand">
                        <img src={Logo} alt="logo" />
                        <h1>Awaas Kalpana</h1>
                    </Link>
                </div>
                <div className="header-center">
                    <div className="header-center-search">
                        <input type="text" name="" id="" placeholder='Search by property name' />
                        <SearchIcon className="search-icon" />
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-login">
                        {
                            userInfo ? (
                                <>
                                    <Link to='/create'>Create Post</Link>
                                    <Link to='/logout' onClick={logoutUser}>Logout</Link>
                                </>
                            ) : (
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>SignUp</Link>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header