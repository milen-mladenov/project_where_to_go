import { useState } from 'react';
import styles from './StageThree.module.css';

export const StageThree = ({ nextStage, prevStage, resHandler }) => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", phone: 0, notes: "" })

    function dataHandler(e) {
        let name = e.target.name;
        let value = e.target.value
        setForm(old => ({ ...old, [name]: value }))
        setData(["contact", form])
    }

    function goNext() {
        resHandler(data)
        nextStage()
    }

    function test() {
        console.log(form);
        console.log(data);
    }
    return (
        <div>
            <h2>Contact information</h2>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={(e) => dataHandler(e)} type="text" name="name" id="name" value={form.name} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input onChange={(e) => dataHandler(e)} type="text" name="email" id="email" value={form.email} />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input onChange={(e) => dataHandler(e)} type="number" name="phone" id="phone" value={form.phone} />
                </div>
                <div>
                    <label htmlFor="notes">Phone: </label>
                    <textarea onChange={(e) => dataHandler(e)} type="text" name="notes" value={form.notes} id="notes"></textarea>
                </div>
            </form>
            <button onClick={() => test()}>TEST</button>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
            <button className={styles.stage_button} onClick={() => goNext()}>Next</button>
        </div>
    );
};