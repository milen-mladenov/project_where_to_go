import styles from './Establishment.module.css'
export const Establishment = ({ est }) => {
    const status = false;
    // add calculation to check if the current status is open or closed based on the working hours and current time

    return (
        <article>
            <div className={styles.name_img_section}>
                <h3>{est.name}</h3>
                <img className={styles.est_img} src={est.img} />
            </div>
            <div className={styles.information}>
                <ul className={styles.types_list}>
                    {est.types.map(t => <li key={est.name + t}>{t}</li>)}
                </ul>
            </div>
            <div>
                <h3>Working hours:</h3>
                <ul>
                    {est.hours.map(h => <li key={est.name + h[0]}>{h[0]} - {h[1]} - {h[2]}</li>)}
                </ul>
                <h3>
                    Currenly:
                    {status ?
                        <p className={styles.opened}>Open</p> :
                        <p className={styles.closed}>Closed</p>
                    }
                </h3>
            </div>
        </article>
    )
}