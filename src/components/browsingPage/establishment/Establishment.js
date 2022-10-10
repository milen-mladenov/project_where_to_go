import styles from './Establishment.module.css'
import { Link } from 'react-router-dom';
export const Establishment = ({ est, id }) => {
    const status = true;
    // add calculation to check if the current status is open or closed based on the working hours and current time

    return (
        <article className={styles.establishment_article}>
            <div className={styles.name_img_section}>
                <h3>{est.name}</h3>
                <img className={styles.est_img} src={est.img} />
            </div>
            <div className={styles.information_hours}>
                <div className={styles.information}>
                    <ul className={styles.types_list}>
                        {est.types.map(t => <li key={est.name + t}>{t}</li>)}
                    </ul>
                </div>
                <div className={styles.working_hours}>
                    <h3>Working hours:</h3>
                    <ul>
                        {est.hours.map(h => <li key={est.name + h[0]}>{h[0]} - {h[1]} - {h[2]}</li>)}
                    </ul>
                </div>
            </div>
            <div className={styles.status}>
                <h3>Currenly:</h3>
                {status ?
                    <h3 className={styles.opened}>Open</h3> :
                    <h3 className={styles.closed}>Closed</h3>
                }
            </div>
            <Link className={styles.reservation_link} to={`/reservations/${id}`}>Make reservation...</Link>
        </article>
    )
}