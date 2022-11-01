import styles from '../UserProfilePage.module.css'
import { Link } from 'react-router-dom'
import { userNav } from '../../utility/images'
export const NavList = ({ details }) => {

    return (
        <li className={styles.nav_list_item}>
            <Link to={details.destination}>
                <img className={styles.nav_img} src={userNav[details.img]} alt={details.name + 'img'} />
                <p>
                    {details.name}
                </p>
            </Link>
        </li>
    )
} 