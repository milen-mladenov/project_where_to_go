import styles from './StageTwo.module.css';

export const StageTwo = ({ nextStage, prevStage }) => {
    return (
        <div>
            <h2>StageTwo</h2>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
            <button className={styles.stage_button} onClick={() => nextStage()}>Next</button>
        </div>
    );
};