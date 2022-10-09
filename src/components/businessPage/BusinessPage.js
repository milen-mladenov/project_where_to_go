import styles from './BusinessPage.module.css'

export const BusinessPage = () => {
    return (
        <section>

            <form>
                <div className={styles.business_hours}>
                    <div className={styles.day}>
                        <label>Monday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Tuesday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Wednesday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Thursday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Friday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Saturday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                    <div className={styles.day}>
                        <label>Sunday</label>
                        <input type="text" placeholder="from" />
                        <input type="text" placeholder="to" />
                    </div>
                </div>
            </form>
            
        </section>
    )
}