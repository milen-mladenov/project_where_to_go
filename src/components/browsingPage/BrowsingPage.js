import { Establishment } from "./establishment/Establishment"
import establishments from '../../utility/establishments.json'
import styles from './BrowsingPage.module.css'
export const BrowsingPage = () => {

    return (
        <section >
            <h1>Browsing</h1>
            <div className={styles.establishments_list}>
                {establishments.map(est => <Establishment key={est.id} est={est} id={est.id} />)}
            </div>
        </section>
    )
}