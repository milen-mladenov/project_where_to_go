import { Establishment } from "./establishment/Establishment"
import establishments from '../utility/establishments.json'
export const BrowsingPage = () => {

    return (
        <section>

            <h1>Browsing</h1>
            {establishments.map(est => <Establishment key={est.id} est={est} id={est.id} />)}
        </section>
    )
}