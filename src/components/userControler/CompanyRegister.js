import styles from './Controler.module.css'

export const CompanyRegister = () => {
    return (
        <section>
            <h1>Register a business</h1>
            <form>
                <label htmlFor="email">Corporate Email</label>
                <input type="email" name="email" />
                <label htmlFor="vat">VAT</label>
                <input type="text" name="vat" />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" />
                <div className={styles.business_types}>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 1</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 2</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 3</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 4</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 5</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 6</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 7</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 8</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 9</p>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" />
                        <p>option 10</p>
                    </div>
                </div>

                <button>Submit</button>
            </form>
        </section>
    )
}