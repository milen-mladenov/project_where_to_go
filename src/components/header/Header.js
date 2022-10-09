import { Link } from "react-router-dom"

export const Header = () => {

    const isLogged = false

    return (
        <header>
            <div className={"logo"}>

            </div>
            <nav className={"navigation"}>
                <ul>
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Profile</li>
                </ul>
            </nav>
            <div className={"login"}>

                {isLogged ?
                    <button>Logout</button> :
                    <div>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                }
            </div>
        </header>
    )
}