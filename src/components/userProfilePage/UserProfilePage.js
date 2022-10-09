import styles from './UserProfilePage.module.css'
import pencil from '../utility/svg/redact_pencil.svg'

export const UserProfilePage = () => {

    const user = {
        username: "Ivan Ivanov",
        userImg: "",
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


    return (
        <section>
            <h2>{user.username}</h2>
            <div className={styles.user_img_section}>
                <img src={user.userImg} />
                <div>
                    <p>Country:</p>
                    <p>{user.userCountry}</p>
                </div>
                <div>
                    <p>Gender:</p>
                    <p>{user.gender}</p>
                </div>
            </div>
            <div className={styles.details_section}>
                <div className={styles.details_row}>
                    <input type="email" value={user.email} disabled />
                    <img className={styles.redact_pencil} src={pencil} />
                </div>
                <div className={styles.details_row}>
                    <input type="number" value={user.phone} disabled />
                    <img className={styles.redact_pencil} src={pencil} />
                </div>
                <div>
                    <h3>Visited history:</h3>
                    <ol>
                        {user.visitedHistory.map(x => <li >You visited {x.location} on {x.date} at {x.time} </li>)}
                    </ol>
                </div>
            </div>
        </section>
    )
}