import { Link } from "react-router-dom"
import styles from './Controller.module.css'

export const Register = () => {

    return (
        <section className={styles.registration_section}>
            <h1 className={styles.form_title}>Register</h1>
            <form className={styles.registration_form}>
                <label htmlFor="email">Email</label>
                <input className={styles.form_input_data} type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input className={styles.form_input_data} type="password" id="password" name="password" />
                <label htmlFor="re_pass">Repeat password</label>
                <input className={styles.form_input_data} type="password" id="re_pass" name="re_pass" />
                <div className={styles.registration_terms_and_cond}>
                    <input type="checkbox" />
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                    </p>
                </div>
                <button className={styles.form_btn}>Submit</button>
            </form>
            <p>Don't have an account? <Link to='/login'>Login</Link></p>
        </section>
    )
}