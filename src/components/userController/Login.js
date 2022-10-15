import { Link } from "react-router-dom"
import styles from './Controller.module.css'


export const Login = () => {

    return (
        <section className={styles.login_section}>
            <h1 className={styles.form_title}>Login</h1>
            <form className={styles.login_form}>
                <label htmlFor="email">Email</label>
                <input className={styles.form_input_data} type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input className={styles.form_input_data} type="password" id="password" name="password" />

                <button className={styles.form_btn}>Login</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </section>
    )
}