import styles from './ReservationsPage.module.css'
import { ReservationForm } from './reservationForm/ReservationForm'
import { useState } from 'react'

export const ReservationsPage = ({ location }) => {
    const [reserve, setReserv] = useState(false)
    const [reservDetails, setReservDetails] = useState({})
    const hours = location.hours || [];
    function reservationHandler(data) {
        setReservDetails(data)
    }

    function startReservation() {
        setReserv(!reserve)
    }

    return (
        <>
            <div className={styles.reservations_content}>
                <article>
                    <div className={styles.reservation_name_sections}>
                        <h2>{location.name}</h2>
                        {reserve ?
                            <ReservationForm handleState={startReservation} /> :
                            <button onClick={() => startReservation()}>Reservation Details</button>
                        }
                    </div>
                    <img className={styles.reservation_img} src={location.img} />
                </article>
                <article>
                    <ul>
                        {hours.map(d => <li key={hours.indexOf(d)}>{d[0]} - {d[1]} : {d[2]}</li>)}
                    </ul>
                </article>
            </div>
            <div className={styles.reservations_menu}>
                <div className={styles.menu_section}>
                    <h3>Starters</h3>
                    <ul className={styles.menu_starters}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
                <div className={styles.menu_section}>
                    <h3>Mains</h3>
                    <ul className={styles.menu_mains}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
                <div className={styles.menu_section}>
                    <h3>Deserts</h3>
                    <ul className={styles.menu_deserts}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
                <div className={styles.menu_section}>
                    <h3>Drinks</h3>
                    <ul className={styles.menu_drinks}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>

            </div>
        </>
    )
}