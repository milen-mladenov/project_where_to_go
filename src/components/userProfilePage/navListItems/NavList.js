import styles from '../UserProfilePage.module.css'

export const NavList = ({ details }) => {
    return (
        <li className={styles.nav_list_item}>
            <a href={details.destination}>
                <img src={details.img} alt={details.name + 'img'} />
                <p>
                    {details.name}
                </p>
            </a>
        </li>
    )
} 