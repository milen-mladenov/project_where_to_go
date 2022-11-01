import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import logo from '../../utility/svg/fork_knife_logo.svg'
import styles from './Header.module.css'
import { naviMenu } from "../../utility/images"

export const Header = () => {
    const [isLogged, setIsLogged] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        setWindowWidth(window.screen.width)
    }, [windowWidth])

    function statusHandler() {
        setIsLogged(!isLogged)
    }

    const mobileMenuIcon =
        (<>
            {dropdown ?
                <div className={styles.dropdownSection} >
                    <img className={styles.dropdownMenu} onClick={dropdownState} src={naviMenu.closeMenu} alt="img" />
                    <ul className={styles.dropdownOpened}>

                        <Link to="/"><li>Home</li></Link>
                        <Link to="/browse"><li>Browse</li></Link>
                        {isLogged ?
                            <div className={styles.login_section}>
                                <Link to="/profile"><li>Profile</li></Link>
                                <Link to="/" onClick={statusHandler}><li>Logout</li></Link> </div> :
                            <div className={styles.login_section}>
                                <Link to="/login"><li>Login</li></Link>
                                <Link to="/register"><li>Register</li></Link>
                            </div>
                        }
                    </ul>
                </div> :
                <div className={styles.dropdownSection}> <img className={styles.dropdownMenu} onClick={dropdownState} src={naviMenu.openMenu} alt="img"/> </div>}
        </>)

    function dropdownState() {
        setDropdown(!dropdown)
    }

    return (
        <header>
            <div className={styles.header_content}>
                <Link to="/">
                    <div className={styles.logo_section}>
                        {windowWidth < 400 ? <h2 className={styles.name}>WTG</h2> : <h2 className={styles.name}>WhereToGo</h2>}
                        <img className={styles.logo} src={logo} alt="img"/>
                    </div>
                </Link>
                {windowWidth < 900
                    ? mobileMenuIcon
                    : <nav className={styles.navigation}>
                        <ul>
                            {/* {isLogged ? <div className={styles.user_welcome}>
                                <h3>Welcome back</h3>
                                <h3>{name}</h3>
                            </div> : ""} */}
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/browse"><li>Browse</li></Link>
                            {isLogged ?
                                <div className={styles.login_section}>
                                    <Link to="/profile"><li>Profile</li></Link>
                                    <Link to="/" onClick={statusHandler}><li>Logout</li></Link> </div> :
                                <div className={styles.login_section}>
                                    <Link to="/login"><li>Login</li></Link>
                                    <Link to="/register"><li>Register</li></Link>
                                </div>
                            }
                        </ul>
                    </nav>}

            </div>
        </header>
    )
}