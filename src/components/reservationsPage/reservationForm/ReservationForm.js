import styles from './ReservationForm.module.css'


export const ReservationForm = ({ handleState }) => {


    return (
        <section className={styles.reservations_section}>
            <button className={styles.close_btn} onClick={() => handleState()}>X</button>
            <form className={styles.reservation_form}>
                <label htmlFor="month">Month: <input id="month" name="month" type="text" /></label>
                <label htmlFor="date">Date: <input id="date" name="date" type="text" /></label>
                <label htmlFor="time">Time: <input id="time" name="time" type="text" /></label>
                <button>Create Reservation</button>
            </form>
        </section>
    )
}