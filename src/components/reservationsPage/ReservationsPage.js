import styles from './ReservationsPage.module.css'
import { ReservationForm } from './reservationForm/ReservationForm'
import { useState } from 'react'

export const ReservationsPage = ({ location }) => {
    const [reserve, setReserv] = useState(false)
    const [reservDetails, setReservDetails] = useState({})

    function reservationHandler(data) {
        setReservDetails(data)
    }

    function startReservation() {
        setReserv(!reserve)
    }


    return (
        <>
            {/* <h1>Create your reservations for {location.name}</h1> */}

            <article>
                <h2>{location.name}</h2>
                <img src={location.img} />
            </article>

            {reserve ?
                <ReservationForm handleState={startReservation} /> :
                <button onClick={() => startReservation()}>Reservation Details</button>
            }

        </>
    )
}