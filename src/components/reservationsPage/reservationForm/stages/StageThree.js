import styles from './StageThree.module.css';

export const StageThree = ({ nextStage, prevStage }) => {
    return (
        <div>
            <h2>StageThree</h2>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
            <button className={styles.stage_button} onClick={() => nextStage()}>Next</button>
        </div>
    );
};