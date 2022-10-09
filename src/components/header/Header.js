import { useState } from "react"
import { Link } from "react-router-dom"

import logo from '../utility/svg/fork_knife_logo.svg'
import styles from './Header.module.css'

export const Header = () => {
    const [isLogged, setIsLogged] = useState(true)

    const name = "UserName"

    function statusHandler() {
        setIsLogged(!isLogged)
    }

    return (
        <header>
            <Link to="/">
                <div className={styles.logo_section}>
                    <h2 className={styles.name}>WhereToGo</h2>
                    <img className={styles.logo} src={logo} />
                </div>
            </Link>
            <nav className={styles.navigation}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/browse"><li>Browse</li></Link>
                    {isLogged ?
                        <div className={styles.login_section}>
                            <h3>Welcome back {name}</h3>
                            <Link to="/profile"><li>Profile</li></Link>
                            <Link to="/" onClick={statusHandler}><li>Logout</li></Link> </div> :
                        <div className={styles.login_section}>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/register"><li>Register</li></Link>
                        </div>
                    }
                </ul>
            </nav>
        </header>
    )
}