import { Establishment } from "./establishment/Establishment"
import establishments from '../../utility/establishments.json'
import styles from './BrowsingPage.module.css'
export const BrowsingPage = ({handler}) => {

    return (
        <section >
            <h1>Browsing</h1>
            <div className={styles.establishments_list}>
                {establishments.map(est => <Establishment handler={handler} key={est.id} est={est} id={est.id} />)}
            </div>
        </section>
    )
}