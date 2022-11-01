import styles from './UserProfilePage.module.css'
import pencil from '../utility/svg/redact_pencil.svg'
import { NavList } from './navListItems/NavList'

export const UserProfilePage = () => {

    const user = {
        username: "Ivan Ivanov",
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU",
        userCountry: "Bulgaria",
        email: "ivan_ivanov@abv.bg",
        phone: "0888123456",
        gender: "M",
        visitedHistory: [
            { location: "barOne", date: "12.11.2021", time: "15:30" },
            { location: "barTwo", date: "01.6.2021", time: "21:30" },
            { location: "barThree", date: "20.12.2021", time: "19:00" },
            { location: "barOne", date: "25.07.2021", time: "12:15" }
        ],
        comments: []
    }
    const navigation = [{
        name: 'Settings',
        img: '',
        destination: '/profile/settings'
    }, {
        name: 'Photos',
        img: '',
        destination: '/profile/photos'
    }, {
        name: 'Reviews',
        img: '',
        destination: '/profile/reviews'
    }, {
        name: 'Visited',
        img: '',
        destination: '/profile/visited'
    }, {
        name: 'Comments',
        img: '',
        destination: '/profile/comments'
    }]

    return (
        <section className={styles.profile_page}>
            <section className={styles.profile_navigation_section}>
                <div className={styles.profile_top_section}>
                    <div className={styles.user_img_section}>
                        <h2 className={styles.username}>{user.username}</h2>
                        <img className={styles.user_picture} src={user.userImg} />
                        <div className={styles.basic_info}>
                            <p>Country:</p>
                            <p>{user.userCountry}</p>
                        </div>
                        <div className={styles.basic_info}>
                            <p>Gender:</p>
                            <p>{user.gender}</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className={styles.profile_navigation}>
                        {navigation.map(n => <NavList key={n.name} details={n} />)}
                    </ul>
                </nav>
            </section>
            <section className={styles.profile_content}>

                <div className={styles.details_section}>
                    <div className={styles.details_row}>
                        <input type="email" value={user.email} disabled />
                        <img className={styles.redact_pencil} src={pencil} />
                    </div>
                    <div className={styles.details_row}>
                        <input type="number" value={user.phone} disabled />
                        <img className={styles.redact_pencil} src={pencil} />
                    </div>

                </div>
                <div className={styles.visited_history} >
                    <h3>Visited history:</h3>
                    <ol>
                        {user.visitedHistory.map(x => <li key={x.date + x.time} >You visited {x.location} on {x.date} at {x.time} </li>)}
                    </ol>
                </div>
            </section>
        </section>
    )
}