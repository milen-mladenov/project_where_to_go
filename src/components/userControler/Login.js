import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <section>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <button>Login</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </section>
    )
}