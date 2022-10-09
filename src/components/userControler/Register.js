import { Link } from "react-router-dom"

export const Register = () => {

    return (
        <section>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="re_pass">Repeat password</label>
                <input type="password" name="re_pass" />
                <div>
                    <input type="checkbox" />
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                    </p>
                </div>
                <button>Submit</button>
            </form>
            <p>Don't have an account? <Link to='/login'>Login</Link></p>
        </section>
    )
}