import { useState } from 'react';
import styles from './StageTwo.module.css';

export const StageTwo = ({ nextStage, prevStage, resHandler }) => {
    const [guests, setGuests] = useState([])
    function handler(num) {
        setGuests(['count', num])
    }
    function goNext() {
        resHandler(guests)
        nextStage()
    }
    return (
        <div>
            <h2>Amount of guests:</h2>
            <div className={styles.guest_amount}>
                <button onClick={() => handler(1)}>1</button>
                <button onClick={() => handler(2)}>2</button>
                <button onClick={() => handler(3)}>3</button>
                <button onClick={() => handler(4)}>4</button>
                <button onClick={() => handler(5)}>5</button>
                <button onClick={() => handler(6)}>6</button>
                <button onClick={() => handler(7)}>7</button>
                <button onClick={() => handler(8)}>8</button>
                <button onClick={() => handler(9)}>9</button>
                <button onClick={() => handler(10)}>10</button>
                <button onClick={() => handler(11)}>11</button>
                <button onClick={() => handler(12)}>12</button>
                <button onClick={() => handler(13)}>13</button>
                <button onClick={() => handler("13+")}>++</button>
            </div>
            <h2>{guests[1]} will be attending? </h2>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
            <button className={styles.stage_button} onClick={() => goNext()}>Next</button>
        </div>
    );
};