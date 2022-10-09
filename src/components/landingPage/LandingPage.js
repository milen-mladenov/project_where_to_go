import styles from './LandingPage.module.css'
export const LandingPage = () => {
    return (
        <>
            <section className={styles.title}>
                <h1>Don't know where to go today ?</h1>
                <h2>You have come to the right place.</h2>
            </section>

            <section className={styles.information}>
                <h2>Are you looking for a place to eat or just a drink?</h2>
                <h3>Would you like to get a traditional cuisine?</h3>
                <img src='https://justbulgaria.net/wp-content/uploads/2021/04/249_original-e1441724336118.jpg' />
                <h3>Or just something to drink?</h3>
                <img src='https://cdn.theculturetrip.com/wp-content/uploads/2015/11/drinks-2578446_1280-1024x682.jpg' />
            </section>
        </>
    )
}