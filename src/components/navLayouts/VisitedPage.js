import styles from './navLayouts.module.css'

export const VisitedPage = () => {

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

    return (

        <div className={styles.visited_history} >
            <h3>Visited history:</h3>
            <ol>
                {user.visitedHistory.map(x => <li key={x.date + x.time} >You visited {x.location} on {x.date} at {x.time} </li>)}
            </ol>
        </div>
    )
}