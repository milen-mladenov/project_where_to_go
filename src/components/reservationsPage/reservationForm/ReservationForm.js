import { useState } from 'react'
import styles from './ReservationForm.module.css'
import { StageFour } from './stages/StageFour'
import { StageThree } from './stages/StageThree'
import { StageTwo } from './stages/StageTwo'
import { StageOne } from './stages/StageOne'

export const ReservationForm = ({ handleState }) => {
    const [stage, setStage] = useState(1);
    const [reservation, setReservation] = useState({})

    function nextStage() {
        setStage(stage + 1)
    }

    function prevStage() {
        setStage(stage - 1)
    }

    function getStage(num) {
        setStage(num)
    }

    function resHandler(data) {

        let name = data[0];
        let value = data[1];

        setReservation(old => ({ ...old, [name]: value }))

    }

    function test() {
        console.log(reservation);
    }

    return (
        <section className={styles.reservations_section}>
            <button className={styles.close_btn} onClick={() => handleState()}>X</button>
            <div>
                <button onClick={() => getStage(1)}>1</button>
                <button onClick={() => getStage(2)}>2</button>
                <button onClick={() => getStage(3)}>3</button>
                <button onClick={() => getStage(4)}>4</button>
            </div>
            {stage == 1 && < StageOne nextStage={nextStage} resHandler={resHandler} />}
            {stage == 2 && < StageTwo nextStage={nextStage} prevStage={prevStage} resHandler={resHandler} />}
            {stage == 3 && < StageThree nextStage={nextStage} prevStage={prevStage} resHandler={resHandler} />}
            {stage == 4 && < StageFour prevStage={prevStage} resHandler={resHandler} />}
            <button onClick={() => test()}>TEST</button>
        </section>
    )
}